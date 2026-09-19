"use client";

// هدر چسبان و شیشه‌ای. وقتی صفحه اسکرول شود، پس‌زمینه‌اش محسوس‌تر می‌شود
// تا متن زیرش از پشت شیشه خوانا بماند.
import { useEffect, useState } from "react";
import type { Content } from "@/content/en";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

export function Header({ t, otherLanguageHref }: { t: Content; otherLanguageHref: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`page ${styles.bar}`}>
        <a href="#main" className={styles.logo} aria-label={t.hero.name}>
          P
        </a>

        <nav className={styles.nav}>
          <a href="#story">{t.nav.story}</a>
          <a href="#works">{t.nav.works}</a>
          {/* دکمهٔ رزومه فقط وقتی فایلش اضافه شد ظاهر می‌شود (content/site.ts) */}
          {site.resume ? <a href={site.resume}>{t.nav.resume}</a> : null}
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className={styles.actions}>
          <a href={otherLanguageHref} className={styles.lang}>
            {t.nav.switchLanguage}
          </a>
          <ThemeToggle label={t.nav.theme} />
        </div>
      </div>
    </header>
  );
}
