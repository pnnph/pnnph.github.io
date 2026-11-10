// صفحهٔ بامبو — آدرس /fa/bamboo/
import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { fa } from "@/content/fa";
import { site } from "@/content/site";
import { BambooPage } from "@/components/BambooPage";

export const metadata: Metadata = pageMeta({
  lang: "fa",
  page: "bamboo",
  title: `${fa.works.bamboo.name} — ${fa.meta.title}`,
  description: fa.works.bamboo.tagline,
});

export default function Bamboo() {
  return <BambooPage t={fa} home="/fa/" blogHref="/fa/blog/" otherLanguageHref="/bamboo/" resumeHref={site.resume.fa} />;
}
