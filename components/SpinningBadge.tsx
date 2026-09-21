// نشان با متن چرخان دور آن.
// متن روی یک مسیر دایره‌ای می‌نشیند (textPath) و کل SVG آرام می‌چرخد؛ خودِ نشان ثابت می‌ماند.
import { Logo } from "./Logo";
import styles from "./SpinningBadge.module.css";

export function SpinningBadge({ text }: { text: string }) {
  // شعاع مسیر ۴۶ واحد است، پس محیطش ۲πr ≈ ۲۸۹ واحد.
  // textLength متن را دقیقاً به همین اندازه می‌کشد: نه فاصلهٔ خالی می‌ماند، نه حرف‌ها روی هم می‌افتند.
  const CIRCUMFERENCE = 2 * Math.PI * 46;
  const ring = `${text} · `;

  return (
    <div className={styles.badge}>
      <svg viewBox="0 0 120 120" className={styles.ring} aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text>
          <textPath
            href="#badge-circle"
            startOffset="0"
            textLength={CIRCUMFERENCE}
            lengthAdjust="spacing"
          >
            {ring}
          </textPath>
        </text>
      </svg>

      <span className={styles.mark}>
        <Logo />
      </span>
    </div>
  );
}
