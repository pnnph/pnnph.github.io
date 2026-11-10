// صفحهٔ بامبو — آدرس /bamboo/
import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { en } from "@/content/en";
import { site } from "@/content/site";
import { BambooPage } from "@/components/BambooPage";

export const metadata: Metadata = pageMeta({
  lang: "en",
  page: "bamboo",
  title: `${en.works.bamboo.name} — ${en.meta.title}`,
  description: en.works.bamboo.tagline,
});

export default function Bamboo() {
  return <BambooPage t={en} home="/" blogHref="/blog/" otherLanguageHref="/fa/bamboo/" resumeHref={site.resume.en} />;
}
