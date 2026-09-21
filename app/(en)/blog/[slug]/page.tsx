// یک یادداشت — آدرس /blog/<slug>/
//
// با output: "export" هر نشانی باید از پیش معلوم باشد، پس generateStaticParams
// فهرست همهٔ نوشته‌ها را می‌دهد و Next برای هرکدام یک صفحهٔ ثابت می‌سازد.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/meta";
import { en } from "@/content/en";
import { site } from "@/content/site";
import { posts, postBySlug } from "@/content/posts";
import { PostPage } from "@/components/PostPage";

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  return pageMeta({
    lang: "en",
    page: "blog",
    slug,
    title: `${post.en.title} — ${en.meta.title}`,
    description: post.en.lede,
  });
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  return (
    <PostPage
      t={en}
      lang="en"
      post={post}
      home="/"
      blogHref="/blog/"
      otherLanguageHref={`/fa/blog/${slug}/`}
      resumeHref={site.resume.en}
    />
  );
}
