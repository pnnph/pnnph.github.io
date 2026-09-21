// صفحهٔ مغزینو — آدرس /maqzino/
import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { en } from "@/content/en";
import { site } from "@/content/site";
import { MaqzinoPage } from "@/components/MaqzinoPage";

export const metadata: Metadata = pageMeta({
  lang: "en",
  page: "maqzino",
  title: `${en.works.maqzino.name} — ${en.meta.title}`,
  description: en.works.maqzino.tagline,
});

export default function Maqzino() {
  return <MaqzinoPage t={en} home="/" otherLanguageHref="/fa/maqzino/" resumeHref={site.resume.en} />;
}
