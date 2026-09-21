// قالب‌بندی تاریخ و عدد، بر اساس زبان صفحه.
//
// هر دو موقع build اجرا می‌شوند و نتیجه‌شان داخل HTML ثابت می‌نشیند، پس
// بازدیدکننده هیچ محاسبه‌ای نمی‌بیند و با جاوااسکریپت خاموش هم درست است.
//
// در صفحهٔ فارسی، fa-IR هم تاریخ را شمسی می‌کند و هم ارقام را فارسی — همان
// قاعده‌ای که در بقیهٔ سایت هست: ارقام هر صفحه به زبان همان صفحه.

/** «۳۱ شهریور ۱۴۰۵» در فارسی، «21 September 2026» در انگلیسی. */
export function formatDate(iso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${iso}T12:00:00Z`));
}

export function formatNumber(n: number, locale: string): string {
  return new Intl.NumberFormat(locale).format(n);
}
