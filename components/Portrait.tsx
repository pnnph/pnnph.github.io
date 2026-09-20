// قاب عکس شخصی در هیرو.
//
// تا وقتی عکس واقعی نرسیده، یک جایگاه تمیز نشان می‌دهد — نه یک آواتار الکی.
// برای گذاشتن عکس: فایل را در public/assets/photo/ بگذار و مسیرش را در
// content/site.ts (کلید photo) بنویس. هیچ جای دیگری نیاز به تغییر ندارد.
import { site } from "@/content/site";
import { Logo } from "./Logo";
import styles from "./Portrait.module.css";

export function Portrait({ alt, placeholder }: { alt: string; placeholder: string }) {
  return (
    <figure className={styles.frame}>
      {site.photo ? (
        <img src={site.photo} alt={alt} className={styles.photo} width={1200} height={1500} />
      ) : (
        <div className={styles.empty} role="img" aria-label={placeholder}>
          <span className={styles.emptyMark} aria-hidden="true">
            <Logo />
          </span>
          <span className={styles.emptyText}>{placeholder}</span>
        </div>
      )}
      <span className={styles.glow} aria-hidden="true" />
    </figure>
  );
}
