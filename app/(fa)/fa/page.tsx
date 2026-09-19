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
        <Works t={fa} />
        <Contact t={fa} />
      </main>
      <Footer t={fa} />
    </>
  );
}
