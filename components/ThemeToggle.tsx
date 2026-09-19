"use client";

// کلید پوستهٔ روشن/تیره.
// انتخاب کاربر در حافظهٔ مرورگر خودش می‌ماند و دفعهٔ بعد همان اعمال می‌شود.
import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

type Theme = "dark" | "light";

/** این اسکریپت باید *قبل از* رسم صفحه اجرا شود، وگرنه یک لحظه پوستهٔ اشتباه دیده می‌شود. */
export const themeScript = `
document.documentElement.classList.add("js");
try {
  var t = localStorage.getItem("theme");
  if (t === "dark" || t === "light") document.documentElement.dataset.theme = t;
} catch (e) {}
`;

export function ThemeToggle({ label }: { label: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  // تا وقتی جاوااسکریپت اجرا نشده، نمی‌دانیم کاربر چه پوسته‌ای دارد.
  useEffect(() => {
    const stored = document.documentElement.dataset.theme as Theme | undefined;
    const system = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    setTheme(stored ?? system);
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    // حافظهٔ مرورگر ممکن است در حالت ناشناس یا با تنظیمات سخت‌گیرانه در دسترس نباشد.
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button type="button" className={styles.toggle} onClick={toggle} aria-label={label}>
      <span className={styles.icon} aria-hidden="true">
        {theme === "light" ? "☾" : "☀"}
      </span>
    </button>
  );
}
