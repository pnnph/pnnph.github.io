/**
 * تنظیمات سایت — ایمیل، شبکه‌های اجتماعی، آدرس‌ها.
 * هر چیزی که ممکن است روزی عوض شود، اینجاست و فقط اینجا.
 *
 * Site-wide configuration. Everything that might change one day lives here,
 * so changing it never means hunting through components.
 */

export const site = {
  /** آدرس پایهٔ سایت. فقط برای چیزهایی لازم است که آدرس کامل می‌خواهند:
   *  sitemap، canonical و تصویر پیش‌نمایش لینک. همهٔ لینک‌های داخلی نسبی‌اند،
   *  پس با خریدن دامنه فقط همین یک خط عوض می‌شود. */
  url: "https://pnnph.github.io",

  /** عکس شخصی، بدون پس‌زمینه. دو نسخه ساخته شده؛ با photoVariant انتخاب می‌شود. */
  photo: {
    colour: "/assets/photo/peiman-colour.webp",
    grey: "/assets/photo/peiman-grey.webp",
  },

  /** کدام نسخه روی سایت بنشیند: "colour" یا "grey". */
  photoVariant: "colour" as "colour" | "grey",

  email: "peimanasgari@gmail.com",

  social: {
    instagram: "https://www.instagram.com/pey.ink/",
    linkedin: "https://www.linkedin.com/in/peyman-asgari-161627312",
    github: "https://github.com/pnnph/",
  },

  /** رزومه، یکی برای هر زبان. با tools/cv/build.mjs ساخته می‌شوند. */
  resume: {
    en: "/assets/cv/peiman-asgari-cv-en.pdf",
    fa: "/assets/cv/peiman-asgari-cv-fa.pdf",
  },

  /** لینک استورهای مغزینو — قبل از انتشار باید واقعاً باز شوند.
   *  هر کدام که هنوز در صف بررسی است، خالی بماند. */
  maqzino: {
    bazaar: "https://cafebazaar.ir/app/ir.pnnph.maqzino",
    myket: "https://myket.ir/app/ir.pnnph.maqzino",
    privacy: "https://pnnph.github.io/maqzino-privacy/",
    /**
     * نسخهٔ وب (PWA) — برای آیفون، که مغزینو را از فروشگاه نمی‌تواند بگیرد، و
     * کامپیوتر. فایل‌هایش در public/app/ هستند و ساخته می‌شوند: منبعشان پوشهٔ
     * web/ در مخزن خصوصی اپ است و `node tools/publish.mjs` آن‌ها را اینجا
     * می‌گذارد. دستی ویرایششان نکنید.
     */
    web: "/app/",
  },

  /**
   * حمایت مالی داوطلبانه — صفحهٔ حامی‌باش.
   *
   * ⚠️ این لینک عمداً **روی سایت** است، نه داخل اپ.
   *
   * قوانین پرداخت بازار و بند ۶.۹ تفاهم‌نامهٔ مایکت، هدایت کاربر از داخل اپ به
   * درگاه پرداخت دیگر را ممنوع کرده‌اند و جریمه‌اش حذف یا غیرفعال‌سازی اپ است.
   * اپ فقط به سایت لینک می‌دهد — کاری که هر اپی می‌کند — و حمایت اینجا اتفاق
   * می‌افتد. اگر روزی ورودی مستقیم در اپ خواستید، اول از هر دو فروشگاه جواب
   * کتبی بگیرید.
   *
   * تا وقتی خالی است، متنِ بخش حمایت می‌آید ولی دکمه‌اش نه — همان رفتار لینک‌های
   * استور. لینکی که باز نمی‌شود بدتر از نبودنش است. آدرس حامی‌باش را که اینجا
   * گذاشتی، دکمه خودش ظاهر می‌شود و جای دیگری لازم نیست دست بخورد.
   */
  support: {
    hamibash: "https://hamibash.com/maqzino",
  },

  /**
   * دلفی دیجیتال و اپ اولش، بامبو.
   *
   * بامبو تا روز انتشار عمومی پشت رمز آزمایشی است و نشانی خودش برای بازدیدکننده
   * فقط پنجرهٔ رمز باز می‌کند؛ پس فعلاً به صفحهٔ کافه‌بازارش لینک می‌دهیم. آن روز
   * این خط می‌شود https://bamboo.delphidigitalis.com — در رزومه‌ها (tools/cv) هم.
   */
  delphi: {
    site: "https://delphidigitalis.com",
    bamboo: "https://cafebazaar.ir/app/com.delphidigital.bamboo",
  },
} as const;

export const languages = ["en", "fa"] as const;
export type Language = (typeof languages)[number];
