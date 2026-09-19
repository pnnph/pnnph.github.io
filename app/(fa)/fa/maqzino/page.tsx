// صفحهٔ مغزینو — آدرس /fa/maqzino/
import type { Metadata } from "next";
import { fa } from "@/content/fa";
import { MaqzinoPage } from "@/components/MaqzinoPage";

export const metadata: Metadata = {
  title: `${fa.works.maqzino.name} — ${fa.meta.title}`,
  description: fa.works.maqzino.tagline,
};

export default function Maqzino() {
  return <MaqzinoPage t={fa} home="/fa/" otherLanguageHref="/maqzino/" />;
}
