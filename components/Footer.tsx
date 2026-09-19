import type { Content } from "@/content/en";
import styles from "./Footer.module.css";

export function Footer({ t }: { t: Content }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`page ${styles.bar}`}>
        <span>
          © {year} {t.footer.rights}
        </span>
        <span className={styles.note}>{t.footer.note}</span>
      </div>
    </footer>
  );
}
