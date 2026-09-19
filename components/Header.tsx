"use client";

// هدر چسبان و شیشه‌ای. وقتی صفحه اسکرول شود، پس‌زمینه‌اش محسوس‌تر می‌شود
// تا متن زیرش از پشت شیشه خوانا بماند.
//
// روی موبایل، منو داخل یک صفحهٔ کشویی می‌رود؛ روی دسکتاپ همه‌چیز در یک خط است.
import { useEffect, useRef, useState } from "react";
import type { Content } from "@/content/en";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

export function Header({
  t,
  otherLanguageHref,
  home = "",
}: {
  t: Content;
  otherLanguageHref: string;
  /** پیشوند لینک‌های لنگردار. در صفحهٔ اصلی خالی، در زیرصفحه‌ها "/" یا "/fa/". */
  home?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // وقتی منو باز است: Escape می‌بندد، صفحهٔ پشت اسکرول نمی‌شود، و فوکوس داخل منو می‌رود
  // تا کسی که با کیبورد کار می‌کند، پشت پرده گم نشود.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      // فوکوس باید به همان دکمه‌ای برگردد که منو را باز کرده بود، وگرنه کسی که
      // با کیبورد کار می‌کند، بعد از بستن منو سرگردان می‌شود.
      buttonRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function close() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  const links = [
    { href: `${home}#story`, label: t.nav.story },
    { href: `${home}#works`, label: t.nav.works },
    ...(site.resume ? [{ href: site.resume, label: t.nav.resume }] : []),
    { href: `${home}#contact`, label: t.nav.contact },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`page ${styles.bar}`}>
        <a href={home || "#main"} className={styles.logo} aria-label={t.hero.name}>
          P
        </a>

        <nav className={styles.nav}>
          {links.map(link => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={otherLanguageHref} className={styles.lang}>
            {t.nav.switchLanguage}
          </a>
          <ThemeToggle label={t.nav.theme} />
        </div>

        <button
          ref={buttonRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setOpen(o => !o)}
        >
          <span className={`${styles.burger} ${open ? styles.burgerOpen : ""}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* پردهٔ پشت منو: کلیک روی آن هم می‌بندد. */}
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        ref={panelRef}
        tabIndex={-1}
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        // وقتی بسته است، نه صفحه‌خوان می‌خواندش نه با Tab می‌شود واردش شد.
        inert={!open}
      >
        <nav className={styles.panelNav}>
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.panelActions}>
          <a href={otherLanguageHref} className={styles.lang}>
            {t.nav.switchLanguage}
          </a>
          <ThemeToggle label={t.nav.theme} />
        </div>
      </div>
    </header>
  );
}
