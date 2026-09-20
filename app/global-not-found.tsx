// صفحهٔ ۴۰۴.
//
// چون هر زبان چیدمان ریشهٔ خودش را دارد، این صفحه باید خودش <html> را بسازد.
// انگلیسی است، چون آدرسِ اشتباه می‌تواند هر جای سایت باشد و زبانش معلوم نیست —
// ولی هر دو راه بازگشت را نشان می‌دهد.
import type { Metadata } from "next";
import { en } from "@/content/en";
import { fa } from "@/content/fa";
import { Background } from "@/components/Background";
import { themeScript } from "@/components/ThemeToggle";
import styles from "@/components/NotFound.module.css";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: `404 — ${en.meta.title}`,
  description: en.notFound.heading,
};

export default function GlobalNotFound() {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Background />
        <main className={`page ${styles.wrap}`}>
          <p className={styles.code}>404</p>
          <h1 className={styles.heading}>{en.notFound.heading}</h1>
          <p className={styles.text}>{en.notFound.text}</p>

          <div className={styles.actions}>
            <a href="/" className={styles.button}>
              {en.notFound.home}
            </a>
            <a href="/fa/" className={styles.secondary} lang="fa" dir="rtl">
              {fa.notFound.home}
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
