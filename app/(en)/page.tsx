// صفحهٔ اصلی انگلیسی — آدرس /
import { en } from "@/content/en";
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Works } from "@/components/Works";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function HomeEnglish() {
  return (
    <>
      <SmoothScroll />
      <Background />
      <a className="skip-link" href="#main">
        {en.nav.skip}
      </a>
      <Header t={en} otherLanguageHref="/fa/" />
      <main id="main">
        <Hero t={en} />
        <About t={en} />
        <Works t={en} />
        <Contact t={en} />
      </main>
      <Footer t={en} />
    </>
  );
}
