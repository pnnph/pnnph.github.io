// یک یادداشت — آدرس /fa/blog/<slug>/
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/meta";
import { fa } from "@/content/fa";
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
    lang: "fa",
    page: "blog",
    slug,
    title: `${post.fa.title} — ${fa.meta.title}`,
    description: post.fa.lede,
  });
}

export default async function PostFa({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  return (
    <PostPage
      t={fa}
      lang="fa"
      post={post}
      home="/fa/"
      blogHref="/fa/blog/"
      otherLanguageHref={`/blog/${slug}/`}
      resumeHref={site.resume.fa}
    />
  );
}
