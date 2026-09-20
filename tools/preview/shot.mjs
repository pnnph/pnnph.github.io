// Render a page of this site to PNG with headless Chrome, so a design can be reviewed
// without the owner having to start a server or open anything.
//
//   node tools/preview/shot.mjs index.html
//   node tools/preview/shot.mjs index.html --full            whole page, not just the fold
//   node tools/preview/shot.mjs index.html --phone           390x844
//   node tools/preview/shot.mjs en/index.html --light        light theme
//   node tools/preview/shot.mjs index.html --w 1440 --h 900 --out hero.png
//   node tools/preview/shot.mjs https://pnnph.github.io/maqzino-privacy/ --full
//
// PNGs land in .preview/ (git-ignored). Existing files with the same name are overwritten.
import { openChrome } from "./cdp.mjs";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { resolve, basename, dirname, extname, join } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = resolve(import.meta.dirname, "../..");
const args = process.argv.slice(2);
const target = args.find(a => !a.startsWith("--"));

if (!target) {
  console.error("usage: node tools/preview/shot.mjs <page.html|url> [--full] [--phone] [--tablet] [--light] [--w N] [--h N] [--out name.png] [--wait ms]");
  process.exit(1);
}

const flag = name => args.includes(`--${name}`);
const value = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};

const presets = { phone: [390, 844], tablet: [834, 1112], desktop: [1440, 900] };
const preset = flag("phone") ? "phone" : flag("tablet") ? "tablet" : "desktop";
const width = Number(value("w", presets[preset][0]));
const height = Number(value("h", presets[preset][1]));
let full = flag("full");
const scheme = flag("light") ? "light" : flag("dark") ? "dark" : "dark";
const settle = Number(value("wait", 400));

const isUrl = /^https?:\/\//i.test(target);
let url;
if (isUrl) {
  url = target;
} else {
  const file = resolve(ROOT, target);
  if (!existsSync(file)) { console.error(`no such page: ${file}`); process.exit(1); }
  url = pathToFileURL(file).href;
}

const name = value("out", `${basename(target, extname(target)) || "page"}-${preset}-${scheme}${full ? "-full" : ""}.png`);
const outDir = join(ROOT, ".preview");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, name);

const page = await openChrome();
try {
  await page.scheme(scheme);
  await page.viewport(width, height, full ? 1 : 2, preset === "phone");
  await page.load(url);
  // A page that already fits the viewport needs no full-page path, and asking for a
  // beyond-viewport capture of one produces a misaligned image on right-to-left pages.
  if (full && (await page.eval("document.documentElement.scrollHeight")) <= height) {
    full = false;
    // Full-page capture drops to 1x; an ordinary shot can have the sharper 2x back.
    await page.viewport(width, height, 2, preset === "phone");
  }

  if (full) {
    // Reveal-on-scroll only fires for elements the viewport has actually seen, so walk
    // down the page and come back before capturing — otherwise the shot is mostly blank.
    // Scrolling rather than growing the viewport, because a taller viewport stretches
    // anything sized in dvh (the hero) and the page height balloons.
    const total = await page.eval("document.documentElement.scrollHeight");
    for (let y = 0; y < total; y += Math.floor(height * 0.8)) {
      await page.eval(`window.scrollTo(0, ${y})`);
      await new Promise(r => setTimeout(r, 120));
    }
    // پس‌زمینه و لکه‌های fixed در عکسِ فراتر از پنجره فقط یک صفحه را می‌پوشانند،
    // پس موقتاً به حالت عادی برشان می‌گردانیم تا عکس، واقعیت مرورگر را نشان دهد.
    await page.eval(`(() => {
      const s = document.createElement("style");
      s.textContent = "body{background-attachment:scroll!important}[class*=blobs]{position:absolute!important;block-size:100%!important}";
      document.head.appendChild(s);
    })()`);
    await page.eval("window.scrollTo(0, 0)");
    await new Promise(r => setTimeout(r, 400));
  }
  const at = value("at", null);
  if (at) {
    // یک بخش مشخص را وسط پنجره می‌آورد: --at "#works"
    await page.eval(`document.querySelector("${at}")?.scrollIntoView({ block: "start" })`);
    await new Promise(r => setTimeout(r, 500));
  }
  // Entrance animations and lazily drawn blobs need a beat to settle before the capture.
  await new Promise(r => setTimeout(r, settle));
  writeFileSync(outPath, await page.png({ full }));
  const size = await page.eval("document.documentElement.scrollHeight");
  console.log(`${outPath}  (${width}x${full ? size : height}, ${scheme})`);
  if (page.errors.length) {
    console.log("\npage errors:");
    for (const e of page.errors.slice(0, 10)) console.log("  " + e);
  }
} finally {
  page.close();
}
