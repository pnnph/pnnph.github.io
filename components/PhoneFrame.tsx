"use client";

// قاب گوشی با اسکرین‌شات‌هایی که آرام در هم محو می‌شوند — پیش‌فرض مغزینو، بامبو عکس‌های خودش را می‌دهد.
// جای ویدئو را می‌گیرد تا وقتی ویدئوی واقعی اپ ضبط شود — آن‌وقت فقط همین فایل عوض می‌شود.
import { useEffect, useState } from "react";
import styles from "./PhoneFrame.module.css";

const SHOTS = [
  "/assets/maqzino/screenshots/phone/maqzino-01.webp",
  "/assets/maqzino/screenshots/phone/maqzino-02.webp",
  "/assets/maqzino/screenshots/phone/maqzino-04.webp",
  "/assets/maqzino/screenshots/phone/maqzino-05.webp",
];

const INTERVAL_MS = 4000;

export function PhoneFrame({
  alt,
  shots = SHOTS,
  width = 930,
  height = 2000,
}: {
  alt: string;
  shots?: readonly string[];
  width?: number;
  height?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex(i => (i + 1) % shots.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [shots.length]);

  return (
    <div className={styles.phone}>
      <div className={styles.screen}>
        {shots.map((src, i) => (
          <img
            key={src}
            src={src}
            /* فقط اولی alt دارد؛ بقیه تصویر تزئینی‌اند و تکرارشان برای صفحه‌خوان مزاحمت است. */
            alt={i === 0 ? alt : ""}
            width={width}
            height={height}
            loading={i === 0 ? "eager" : "lazy"}
            className={styles.shot}
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i === 0 ? undefined : true}
          />
        ))}
      </div>
      <span className={styles.glow} aria-hidden="true" />
    </div>
  );
}
