// صفحهٔ مغزینو — آدرس /maqzino/
import type { Metadata } from "next";
import { en } from "@/content/en";
import { MaqzinoPage } from "@/components/MaqzinoPage";

export const metadata: Metadata = {
  title: `${en.works.maqzino.name} — ${en.meta.title}`,
  description: en.works.maqzino.tagline,
};

export default function Maqzino() {
  return <MaqzinoPage t={en} home="/" otherLanguageHref="/fa/maqzino/" />;
}
