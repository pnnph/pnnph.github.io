// سرور استاتیک کوچک برای دیدن خروجی build (پوشهٔ out) — بدون هیچ بستهٔ اضافه.
//   node tools/preview/serve.mjs [dir] [port]
// پیش‌فرض: out روی پورت 4321
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, resolve } from "node:path";

const dir = resolve(process.argv[2] || "out");
const port = Number(process.argv[3] || 4321);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webm": "video/webm",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

createServer(async (req, res) => {
  try {
    let path = join(dir, decodeURIComponent(req.url.split("?")[0]));
    // آدرس‌هایی مثل /fa/ به /fa/index.html می‌رسند — همان کاری که GitHub Pages می‌کند.
    if ((await stat(path).catch(() => null))?.isDirectory()) path = join(path, "index.html");
    const body = await readFile(path);
    res.writeHead(200, { "content-type": types[extname(path)] || "application/octet-stream" });
    res.end(body);
  } catch {
    // مثل GitHub Pages: آدرس ناموجود، صفحهٔ 404.html خود سایت را می‌گیرد.
    try {
      const body = await readFile(join(dir, "404.html"));
      res.writeHead(404, { "content-type": types[".html"] });
      res.end(body);
    } catch {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end("404");
    }
  }
}).listen(port, () => console.log(`http://localhost:${port}  →  ${dir}`));
