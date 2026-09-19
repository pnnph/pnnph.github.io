"use client";

// ظاهر شدن آرام هنگام اسکرول.
//
// مهم: محتوا به‌صورت پیش‌فرض *دیده می‌شود*. فقط وقتی جاوااسکریپت اجرا شده باشد
// (کلاس js روی <html>) پنهان می‌شود تا انیمیشن اجرا شود. اگر جاوااسکریپت خطا بدهد
// یا خاموش باشد، بازدیدکننده یک صفحهٔ خالی نمی‌بیند — که با نگه‌داشتن opacity: 0
// در خودِ HTML اتفاق می‌افتاد.
import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        // یک‌بار، نه هر بار که از جلوی چشم رد شود.
        if (entries.some(e => e.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[styles.reveal, shown ? styles.shown : "", className].filter(Boolean).join(" ")}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
