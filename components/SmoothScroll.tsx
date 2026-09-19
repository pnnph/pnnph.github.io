"use client";

// اسکرول نرم (Lenis). اگر کاربر در تنظیمات سیستمش «کاهش حرکت» را روشن کرده باشد،
// اصلاً فعال نمی‌شود — حساسیت دهلیزی شایع است و اسکرول نرم می‌تواند حالت تهوع بدهد.
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let stop = false;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;

    // بارگذاری تنبل: بستهٔ Lenis فقط وقتی دانلود می‌شود که واقعاً استفاده شود.
    import("lenis").then(({ default: Lenis }) => {
      if (stop) return;
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const raf = (time: number) => {
        lenis?.raf(time);
        if (!stop) requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });

    return () => {
      stop = true;
      lenis?.destroy();
    };
  }, []);

  return null;
}
