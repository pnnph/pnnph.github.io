// صفحهٔ مغزینو — آدرس /fa/maqzino/
import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { fa } from "@/content/fa";
import { site } from "@/content/site";
import { MaqzinoPage } from "@/components/MaqzinoPage";

export const metadata: Metadata = pageMeta({
  lang: "fa",
  page: "maqzino",
  title: `${fa.works.maqzino.name} — ${fa.meta.title}`,
  description: fa.works.maqzino.tagline,
});

export default function Maqzino() {
  return <MaqzinoPage t={fa} home="/fa/" otherLanguageHref="/maqzino/" resumeHref={site.resume.fa} />;
}
