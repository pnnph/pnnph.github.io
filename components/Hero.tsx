"use client";

// هیرو — چیدمان بر اساس طرح خودِ صاحب سایت:
// نام کوچک پشت پرتره، نام خانوادگی روی آن، و نشان چرخان پایینِ تصویر.
import { motion, useReducedMotion } from "motion/react";
import type { Content } from "@/content/en";
import { site } from "@/content/site";
import { Portrait } from "./Portrait";
import { SpinningBadge } from "./SpinningBadge";
import styles from "./Hero.module.css";

export function Hero({ t }: { t: Content }) {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.contact.emailSubject)}`;

  return (
    <section className={`page ${styles.hero}`}>
      {/* سه لایه روی هم: نام کوچک، پرتره، نام خانوادگی. ترتیبشان در CSS با z-index است. */}
      <div className={styles.stage}>
        <motion.h1 className={styles.name} {...rise(0)}>
          {/* نام کوچک یک‌تکه می‌ماند و بالای جمجمه از میانش بالا می‌آید؛ تکه‌کردنِ
              کلمه در فارسی همیشه یا شکاف می‌ساخت یا حرف‌ها را از هم می‌بُرید. */}
          <span className={styles.given}>{t.hero.given}</span>
          <span className={styles.family}>{t.hero.family}</span>
        </motion.h1>

        <motion.div
          className={styles.portrait}
          initial={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: reduced ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Portrait alt={t.hero.photoAlt} placeholder={t.hero.photoPlaceholder} />
        </motion.div>

        <motion.div className={styles.badge} {...rise(0.45)}>
          <SpinningBadge text={t.hero.badge} />
        </motion.div>
      </div>

      <motion.p className={styles.title} {...rise(0.2)}>
        {t.hero.title}
      </motion.p>

      <motion.p className={styles.intro} {...rise(0.28)}>
        {t.hero.intro}
      </motion.p>

      <motion.div className={styles.actions} {...rise(0.36)}>
        <a href="#works" className={styles.primary}>
          {t.hero.seeWorks}
        </a>
        <a href={mailto} className={styles.secondary}>
          {t.hero.contact}
        </a>
      </motion.div>
    </section>
  );
}
