// Minimal headless Chrome driver over the DevTools protocol (Node 22+, no dependencies).
// Adapted from the Maqzino brand tools for rendering site pages instead of logo animations.
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const CHROME = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const sleep = ms => new Promise(r => setTimeout(r, ms));

export async function openChrome({ port = 9335 } = {}) {
  const profile = fileURLToPath(new URL("./.chrome-profile", import.meta.url));
  mkdirSync(profile, { recursive: true });
  const proc = spawn(CHROME, [
    "--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
    "--no-first-run", "--hide-scrollbars", "--allow-file-access-from-files",
    "--force-color-profile=srgb", "about:blank",
  ], { stdio: "ignore" });

  let targets;
  for (let i = 0; i < 100 && !targets; i++) {
    try { targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); }
    catch { await sleep(150); }
  }
  if (!targets) { proc.kill(); throw new Error("Chrome DevTools did not start"); }

  const ws = new WebSocket(targets.find(t => t.type === "page").webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0; const pending = new Map();
  ws.onmessage = e => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  };
  const send = (method, params = {}) => new Promise((res, rej) => {
    const n = ++id;
    pending.set(n, m => m.error ? rej(new Error(`${method}: ${m.error.message}`)) : res(m.result));
    ws.send(JSON.stringify({ id: n, method, params }));
  });

  await send("Page.enable");
  await send("Runtime.enable");

  const page = {
    send,

    // Console errors are collected so a preview never silently hides a broken page.
    errors: [],

    async viewport(width, height, deviceScaleFactor = 2, mobile = false) {
      await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor, mobile });
    },

    // "dark" | "light" | null (follow whatever the page itself decides)
    async scheme(value) {
      await send("Emulation.setEmulatedMedia", {
        features: value ? [{ name: "prefers-color-scheme", value }] : [],
      });
    },

    async load(url, timeoutMs = 60_000) {
      await send("Page.navigate", { url });
      const end = Date.now() + timeoutMs;
      while (Date.now() < end) {
        const r = await send("Runtime.evaluate", { expression: "document.readyState", returnByValue: true });
        if (r.result.value === "complete") break;
        await sleep(100);
      }
      // Web fonts load after readyState:complete; screenshotting earlier catches the fallback face.
      await page.eval("document.fonts ? document.fonts.ready.then(() => true) : true");
    },

    eval: async expression =>
      (await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true })).result.value,

    async png({ full = false } = {}) {
      const clip = full ? await page.contentClip() : undefined;
      const r = await send("Page.captureScreenshot", {
        format: "png", fromSurface: true, captureBeyondViewport: full,
        ...(clip ? { clip } : {}),
      });
      return Buffer.from(r.data, "base64");
    },

    /** چاپ به PDF. متن انتخاب‌شدنی می‌ماند، پس سیستم‌های استخدامی می‌توانند بخوانندش. */
    async pdf({ landscape = false } = {}) {
      const r = await send("Page.printToPDF", {
        printBackground: true,
        preferCSSPageSize: true,
        landscape,
        marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0,
      });
      return Buffer.from(r.data, "base64");
    },

    async contentClip() {
      const { cssContentSize, contentSize } = await send("Page.getLayoutMetrics");
      const size = cssContentSize || contentSize;
      return { x: 0, y: 0, width: Math.ceil(size.width), height: Math.ceil(size.height), scale: 1 };
    },

    close() { try { ws.close(); } catch {} proc.kill(); },
  };

  ws.addEventListener("message", e => {
    const m = JSON.parse(e.data);
    if (m.method === "Runtime.exceptionThrown") {
      page.errors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
    }
    if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") {
      page.errors.push(m.params.args.map(a => a.value ?? a.description ?? "").join(" "));
    }
  });

  return page;
}
