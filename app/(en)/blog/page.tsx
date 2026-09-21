// فهرست یادداشت‌ها — آدرس /blog/
import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { en } from "@/content/en";
import { site } from "@/content/site";
import { BlogIndex } from "@/components/BlogIndex";

export const metadata: Metadata = pageMeta({
  lang: "en",
  page: "blog",
  title: `${en.blog.heading} — ${en.meta.title}`,
  description: en.blog.lead,
});

export default function Blog() {
  return (
    <BlogIndex
      t={en}
      lang="en"
      home="/"
      blogHref="/blog/"
      otherLanguageHref="/fa/blog/"
      resumeHref={site.resume.en}
    />
  );
}
