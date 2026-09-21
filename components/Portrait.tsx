// پرتره — بدون قاب، داخل یک دایرهٔ نامرئی که لبه‌هایش و مخصوصاً پایینش محو می‌شود.
//
// دو نسخه دارد (رنگی و سیاه‌وسفید)؛ انتخابش در content/site.ts است.
// تا وقتی عکسی نباشد، جای خالی تمیزی نشان می‌دهد.
import { site } from "@/content/site";
import { Logo } from "./Logo";
import styles from "./Portrait.module.css";

export function Portrait({ alt, placeholder }: { alt: string; placeholder: string }) {
  const src = site.photo[site.photoVariant];

  if (!src) {
    return (
      <div className={styles.empty} role="img" aria-label={placeholder}>
        <span className={styles.emptyMark} aria-hidden="true">
          <Logo />
        </span>
        <span className={styles.emptyText}>{placeholder}</span>
      </div>
    );
  }

  return (
    <figure className={styles.frame}>
      <img src={src} alt={alt} className={styles.photo} width={1000} height={1000} />
      <span className={styles.glow} aria-hidden="true" />
    </figure>
  );
}
