// ساخت متادیتای هر صفحه در یک جا.
//
// چیزهایی که اینجا تولید می‌شوند و چشم بازدیدکننده نمی‌بیندشان، ولی مهم‌اند:
//  • canonical — آدرس رسمی صفحه، تا گوگل نسخه‌های تکراری نسازد
//  • hreflang — به گوگل می‌گوید این دو صفحه یک محتوا به دو زبان‌اند، نه دو چیز جدا
//  • Open Graph — تصویر و متنی که تلگرام، واتساپ و لینکدین هنگام اشتراک لینک نشان می‌دهند
import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Language } from "@/content/site";

/** آدرس همان صفحه در زبان دیگر. */
const paths = {
  home: { en: "/", fa: "/fa/" },
  maqzino: { en: "/maqzino/", fa: "/fa/maqzino/" },
  blog: { en: "/blog/", fa: "/fa/blog/" },
};

export function pageMeta({
  lang,
  page,
  slug,
  title,
  description,
}: {
  lang: Language;
  page: keyof typeof paths;
  /** برای صفحهٔ یک یادداشت: نشانی‌اش زیر /blog/. نشانی در هر دو زبان یکی است. */
  slug?: string;
  title: string;
  description: string;
}): Metadata {
  const base = paths[page];
  const pair = slug ? { en: `${base.en}${slug}/`, fa: `${base.fa}${slug}/` } : base;
  const path = pair[lang];
  const image = `/assets/og/og-${lang}.jpg`;

  return {
    metadataBase: new URL(site.url),
    title,
    description,

    alternates: {
      canonical: path,
      languages: {
        en: pair.en,
        fa: pair.fa,
        // به موتور جستجو می‌گوید اگر زبان کاربر هیچ‌کدام نبود، کدام را نشان بدهد.
        "x-default": pair.en,
      },
    },

    openGraph: {
      type: "website",
      locale: lang === "fa" ? "fa_IR" : "en_US",
      url: path,
      siteName: title,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    icons: {
      icon: "/favicon.png",
      apple: "/apple-touch-icon.png",
    },
  };
}
