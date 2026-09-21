// فهرست یادداشت‌ها — آدرس /fa/blog/
import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { fa } from "@/content/fa";
import { site } from "@/content/site";
import { BlogIndex } from "@/components/BlogIndex";

export const metadata: Metadata = pageMeta({
  lang: "fa",
  page: "blog",
  title: `${fa.blog.heading} — ${fa.meta.title}`,
  description: fa.blog.lead,
});

export default function BlogFa() {
  return (
    <BlogIndex
      t={fa}
      lang="fa"
      home="/fa/"
      blogHref="/fa/blog/"
      otherLanguageHref="/blog/"
      resumeHref={site.resume.fa}
    />
  );
}
