// نقشهٔ سایت. با output: "export" به‌صورت فایل ثابت sitemap.xml ساخته می‌شود.
import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", fa: "/fa/", priority: 1 },
    { path: "/maqzino/", fa: "/fa/maqzino/", priority: 0.8 },
  ];

  return pages.flatMap(({ path, fa, priority }) =>
    [path, fa].map(p => ({
      url: new URL(p, site.url).href,
      lastModified: new Date(),
      priority,
      // هر آدرس، نسخهٔ زبان دیگرش را معرفی می‌کند.
      alternates: {
        languages: {
          en: new URL(path, site.url).href,
          fa: new URL(fa, site.url).href,
        },
      },
    })),
  );
}
