// عکس‌های بامبو و ویترین دلفی دیجیتال. ترتیب با فهرست توضیح‌ها در content/*.ts (bambooPage) یکی است.
// منبع: پوشهٔ «Bamboo Screen» روی دسکتاپ صاحب سایت، تبدیل‌شده به WebP.

const pad = (i: number) => String(i + 1).padStart(2, "0");

/** موبایل، ۶۰۰×۱۲۹۰ — همان نسبت قاب گوشی. */
export const BAMBOO_PHONE = Array.from({ length: 10 }, (_, i) => `/assets/bamboo/phone/bamboo-${pad(i)}.webp`);

/** وب، ۱۶۰۰×۸۳۰. */
export const BAMBOO_WEB = Array.from({ length: 6 }, (_, i) => `/assets/bamboo/web/bamboo-web-${pad(i)}.webp`);

/** چهار عکسی که در قاب گوشی کارت صفحهٔ اصلی می‌چرخند: امروز، مهارت‌ها، آرامش، پناهگاه. */
export const BAMBOO_PHONE_CYCLE = [BAMBOO_PHONE[1], BAMBOO_PHONE[2], BAMBOO_PHONE[3], BAMBOO_PHONE[6]];

export const DELPHI_SHOT = "/assets/delphi/delphi-tools.webp";
