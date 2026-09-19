// اسکلت موقت — فقط برای اینکه ببینیم ساختار، فونت، رنگ‌ها و راست‌به‌چپ درست کار می‌کنند.
// وقتی بخش‌های واقعی (هدر، هیرو، پروژه‌ها…) ساخته شدند، این فایل حذف می‌شود.
import type { en } from "@/content/en";
import type { fa } from "@/content/fa";
import styles from "./Placeholder.module.css";

type Text = typeof en | typeof fa;

export function Placeholder({
  t,
  otherLanguageHref,
}: {
  t: Text;
  otherLanguageHref: string;
}) {
  return (
    <>
      <a className="skip-link" href="#main">
        {t.nav.story}
      </a>

      <div className={styles.blobs} aria-hidden="true">
        <span className={styles.blobA} />
        <span className={styles.blobB} />
        <span className={styles.blobC} />
      </div>

      <header className={`page ${styles.header}`}>
        <span className={styles.logo}>P</span>
        <a href={otherLanguageHref} className={styles.langSwitch}>
          {t.nav.switchLanguage}
        </a>
      </header>

      <main id="main" className="page section">
        <h1 className={styles.name}>{t.hero.name}</h1>
        <p className={styles.title}>{t.hero.title}</p>
        <p className={styles.intro}>{t.hero.intro}</p>

        <div className={styles.card}>
          <h2 className={styles.cardHeading}>{t.works.maqzino.name}</h2>
          <p>{t.works.maqzino.tagline}</p>
        </div>
      </main>
    </>
  );
}
