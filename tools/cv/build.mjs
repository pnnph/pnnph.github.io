// رزومه را از HTML به PDF می‌برد: یک صفحهٔ A4، متن قابل انتخاب و جستجو.
//   node tools/cv/build.mjs
import { openChrome } from "../preview/cdp.mjs";
import { writeFileSync, mkdirSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = resolve(import.meta.dirname, "../..");
const OUT = resolve(ROOT, "public/assets/cv");
mkdirSync(OUT, { recursive: true });

const page = await openChrome({ port: 9410 });
try {
  for (const [lang, file] of [["fa", "fa.html"], ["en", "en.html"]]) {
    // اندازهٔ A4 در پیکسل CSS، تا آنچه در عکس می‌بینیم همانی باشد که چاپ می‌شود.
    await page.viewport(794, 1123, 2);
    await page.load(pathToFileURL(resolve(import.meta.dirname, file)).href);
    await new Promise(r => setTimeout(r, 400));

    const pages = await page.eval(
      `Math.ceil(document.body.getBoundingClientRect().height / (297 * 96 / 25.4))`,
    );

    const pdf = resolve(OUT, `peiman-asgari-cv-${lang}.pdf`);
    writeFileSync(pdf, await page.pdf());
    writeFileSync(resolve(ROOT, `.preview/cv-${lang}.png`), await page.png({ full: true }));

    console.log(`${lang}: ${(statSync(pdf).size / 1024) | 0}KB, ${pages} page(s)`);
    if (pages > 1) console.log(`   ⚠️  از یک صفحه بیشتر شد — محتوا را کوتاه‌تر کن یا اندازهٔ متن را کم کن`);
  }
} finally {
  page.close();
}
