// نقشهٔ سایت. با output: "export" به‌صورت فایل ثابت sitemap.xml ساخته می‌شود.
import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { posts } from "@/content/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", fa: "/fa/", priority: 1 },
    { path: "/maqzino/", fa: "/fa/maqzino/", priority: 0.8 },
    { path: "/blog/", fa: "/fa/blog/", priority: 0.7 },
    // هر یادداشت، در هر دو زبان. نشانی‌اش در هر دو یکی است.
    ...posts.map(post => ({
      path: `/blog/${post.slug}/`,
      fa: `/fa/blog/${post.slug}/`,
      priority: 0.6,
    })),
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
