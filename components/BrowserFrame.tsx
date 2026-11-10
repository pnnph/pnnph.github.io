// قاب ساده‌ی مرورگر برای اسکرین‌شات‌های وب: نوار بالا با سه نقطه و نشانی، و خود عکس.
// همتای PhoneFrame برای نسخه‌های وب.
import styles from "./BrowserFrame.module.css";

export function BrowserFrame({
  src,
  alt,
  address,
  width = 1600,
  height = 830,
}: {
  src: string;
  alt: string;
  /** نشانی‌ای که در نوار بالا نوشته می‌شود، بدون https:// */
  address: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className={styles.browser}>
      <div className={styles.bar} aria-hidden="true">
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.address} dir="ltr">
          {address}
        </span>
      </div>
      <img src={src} alt={alt} width={width} height={height} loading="lazy" className={styles.shot} />
    </figure>
  );
}
