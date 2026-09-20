// صفحهٔ اصلی فارسی — آدرس /fa/
import { fa } from "@/content/fa";
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Works } from "@/components/Works";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  lang: "fa",
  page: "home",
  title: fa.meta.title,
  description: fa.meta.description,
});

export default function HomePersian() {
  return (
    <>
      <SmoothScroll />
      <Background />
      <a className="skip-link" href="#main">
        {fa.nav.skip}
      </a>
      <Header t={fa} otherLanguageHref="/" />
      <main id="main">
        <Hero t={fa} />
        <About t={fa} />
        <Works t={fa} maqzinoHref="/fa/maqzino/" />
        <Contact t={fa} />
      </main>
      <Footer t={fa} />
    </>
  );
}
