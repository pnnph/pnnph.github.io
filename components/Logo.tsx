// نشان شخصی پیمان.
//
// فایل PNG به‌عنوان *ماسک* استفاده می‌شود و رنگ از `currentColor` می‌آید — یعنی یک فایل،
// و نشان در نایت مود سفید و در پوستهٔ روشن مشکی می‌شود، بدون نگه‌داشتن دو نسخه.
// وقتی فایل SVG رسید، همین کامپوننت عوض می‌شود و بقیهٔ سایت دست‌نخورده می‌ماند.
import styles from "./Logo.module.css";

export function Logo({ label }: { label?: string }) {
  return (
    <span
      className={styles.mark}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
