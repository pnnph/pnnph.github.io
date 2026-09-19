// لکه‌های نورانی پس‌زمینه. پشت همهٔ محتوا، بدون واکنش به کلیک،
// و با «کاهش حرکت» ساکن می‌شوند (قاعده‌اش در styles/global.css است).
import styles from "./Background.module.css";

export function Background() {
  return (
    <div className={styles.blobs} aria-hidden="true">
      <span className={styles.a} />
      <span className={styles.b} />
      <span className={styles.c} />
    </div>
  );
}
