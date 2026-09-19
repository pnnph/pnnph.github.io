// تیتر بخش‌ها: یک برچسب کوچک با خط نازک، بعد تیتر درشت — همان ریتم هیرو.
import styles from "./SectionHeading.module.css";

export function SectionHeading({ label, title }: { label?: string; title: string }) {
  return (
    <div className={styles.wrap}>
      {label ? <p className={styles.label}>{label}</p> : null}
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
