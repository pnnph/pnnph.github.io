// صفحهٔ اصلی انگلیسی — آدرس /
import { en } from "@/content/en";
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
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
      </main>
    </>
  );
}
