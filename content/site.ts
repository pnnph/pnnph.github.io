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

  /** عکس شخصی. فایل را در public/assets/photo/ بگذار و مسیرش را اینجا بنویس،
   *  مثلاً "/assets/photo/peiman.jpg". تا وقتی خالی است، جایگاه خالی نشان داده می‌شود. */
  photo: "",

  email: "peimanasgari@gmail.com",

  social: {
    instagram: "https://www.instagram.com/pey.ink/",
    linkedin: "https://www.linkedin.com/in/peyman-asgari-161627312",
    github: "https://github.com/pnnph/",
  },

  /** فایل رزومه هنوز اضافه نشده. وقتی آماده شد در public/assets/ بگذار
   *  و مسیرش را اینجا بنویس؛ دکمه‌ها خودکار فعال می‌شوند. */
  resume: "",

  /** لینک استورهای مغزینو — قبل از انتشار باید واقعاً باز شوند.
   *  هر کدام که هنوز در صف بررسی است، خالی بماند. */
  maqzino: {
    bazaar: "",
    myket: "https://myket.ir/app/ir.pnnph.maqzino",
    privacy: "https://pnnph.github.io/maqzino-privacy/",
  },
} as const;

export const languages = ["en", "fa"] as const;
export type Language = (typeof languages)[number];
