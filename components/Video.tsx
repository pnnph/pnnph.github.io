// ویدئوی معرفی یک محصول. فقط با کلیک کاربر پخش می‌شود و تا آن موقع هیچ بایتی از
// ویدئو دانلود نمی‌شود (preload="none")؛ فقط تصویر پیش‌نمایش. قاب گوشی داخل خود ویدئوست.
import styles from "./Video.module.css";

export function Video({ src, poster, label }: { src: string; poster: string; label: string }) {
  return (
    <div className={styles.frame}>
      <video
        className={styles.video}
        src={src}
        poster={poster}
        controls
        preload="none"
        playsInline
        width={720}
        height={1280}
        aria-label={label}
      />
      <span className={styles.glow} aria-hidden="true" />
    </div>
  );
}
