/**
 * تنظیمات سایت — ایمیل، شبکه‌های اجتماعی، آدرس‌ها.
 * هر چیزی که ممکن است روزی عوض شود، اینجاست و فقط اینجا.
 *
 * Site-wide configuration. Everything that might change one day lives here,
 * so changing it never means hunting through components.
 */

export const site = {
  /** دامنه هنوز خریداری نشده و نام و پسوندش ممکن است عوض شود.
   *  تا آن روز خالی می‌ماند؛ همهٔ لینک‌های داخلی نسبی‌اند. */
  url: "",

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
    myket: "",
    privacy: "https://pnnph.github.io/maqzino-privacy/",
  },
} as const;

export const languages = ["en", "fa"] as const;
export type Language = (typeof languages)[number];
