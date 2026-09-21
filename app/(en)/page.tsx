// صفحهٔ اصلی انگلیسی — آدرس /
import { en } from "@/content/en";
import { site } from "@/content/site";
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
  lang: "en",
  page: "home",
  title: en.meta.title,
  description: en.meta.description,
});

export default function HomeEnglish() {
  return (
    <>
      <SmoothScroll />
      <Background />
      <a className="skip-link" href="#main">
        {en.nav.skip}
      </a>
      <Header t={en} otherLanguageHref="/fa/" resumeHref={site.resume.en} />
      <main id="main">
        <Hero t={en} />
        <About t={en} />
        <Works t={en} maqzinoHref="/maqzino/" />
        <Contact t={en} />
      </main>
      <Footer t={en} />
    </>
  );
}
