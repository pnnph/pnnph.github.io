"use client";

// گالری اسکرین‌شات‌ها با نمای بزرگ.
//
// نمای بزرگ با کیبورد هم کار می‌کند: Escape می‌بندد، کلیدهای جهت عکس بعدی و قبلی
// را می‌آورند، و فوکوس بعد از بستن به همان تصویری برمی‌گردد که باز شده بود.
import { useEffect, useRef, useState } from "react";
import styles from "./Gallery.module.css";

const SHOT_COUNT = 10;
const SHOTS = Array.from(
  { length: SHOT_COUNT },
  (_, i) => `/assets/maqzino/screenshots/phone/maqzino-${String(i + 1).padStart(2, "0")}.webp`,
);

export function Gallery({
  captions,
  labels,
}: {
  captions: readonly string[];
  labels: { close: string; previous: string; next: string };
}) {
  const [open, setOpen] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const closeButton = useRef<HTMLButtonElement>(null);

  const step = (delta: number) =>
    setOpen(i => (i === null ? i : (i + delta + SHOTS.length) % SHOTS.length));

  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      // در صفحهٔ راست‌به‌چپ، تصویر بعدی سمت چپ است — پس کلیدهای جهت هم برعکس می‌شوند.
      const rtl = document.documentElement.dir === "rtl";
      if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    const index = open;
    setOpen(null);
    if (index !== null) triggers.current[index]?.focus();
  }

  return (
    <>
      <ul className={styles.grid}>
        {SHOTS.map((src, i) => (
          <li key={src}>
            <button
              ref={el => {
                triggers.current[i] = el;
              }}
              type="button"
              className={styles.thumb}
              onClick={() => setOpen(i)}
            >
              <img src={src} alt={captions[i]} width={930} height={2000} loading="lazy" />
            </button>
            <p className={styles.caption}>{captions[i]}</p>
          </li>
        ))}
      </ul>

      {open !== null ? (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={captions[open]}>
          {/* کلیک روی فضای خالی هم می‌بندد. */}
          <button type="button" className={styles.backdrop} onClick={close} aria-hidden="true" tabIndex={-1} />

          <figure className={styles.figure}>
            <img src={SHOTS[open]} alt={captions[open]} width={930} height={2000} />
            <figcaption>{captions[open]}</figcaption>
          </figure>

          <div className={styles.controls}>
            <button type="button" onClick={() => step(-1)} aria-label={labels.previous}>
              <span className={styles.arrow} aria-hidden="true">
                ‹
              </span>
            </button>
            <button ref={closeButton} type="button" onClick={close} aria-label={labels.close}>
              ✕
            </button>
            <button type="button" onClick={() => step(1)} aria-label={labels.next}>
              <span className={styles.arrow} aria-hidden="true">
                ›
              </span>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
