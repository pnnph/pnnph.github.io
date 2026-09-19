"use client";

// بخش هیرو: نام، عنوان، معرفی کوتاه، دو دکمه، و قاب گوشی با اسکرین‌شات‌های مغزینو.
// سبک مجله‌ای: تیتر درشت، فضای زیاد، حرکت کم.
import { motion, useReducedMotion } from "motion/react";
import type { Content } from "@/content/en";
import { site } from "@/content/site";
import { PhoneFrame } from "./PhoneFrame";
import styles from "./Hero.module.css";

export function Hero({ t }: { t: Content }) {
  const reduced = useReducedMotion();

  // ورود آرام و پلکانی. با «کاهش حرکت»، همه‌چیز بدون جابه‌جایی ظاهر می‌شود.
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.contact.emailSubject)}`;

  return (
    <section className={`page ${styles.hero}`}>
      <div className={styles.text}>
        <motion.p className={styles.eyebrow} {...rise(0)}>
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1 className={styles.name} {...rise(0.08)}>
          {t.hero.name}
        </motion.h1>

        <motion.p className={styles.title} {...rise(0.16)}>
          {t.hero.title}
        </motion.p>

        <motion.p className={styles.intro} {...rise(0.24)}>
          {t.hero.intro}
        </motion.p>

        <motion.div className={styles.actions} {...rise(0.32)}>
          <a href="#works" className={styles.primary}>
            {t.hero.seeWorks}
          </a>
          <a href={mailto} className={styles.secondary}>
            {t.hero.contact}
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.visual}
        initial={{ opacity: 0, y: reduced ? 0 : 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: reduced ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <PhoneFrame alt={t.works.maqzino.tagline} />
        <p className={styles.caption}>{t.works.maqzino.name}</p>
      </motion.div>
    </section>
  );
}
