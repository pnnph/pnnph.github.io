// «پروژه‌ها». فعلاً یک کارت بزرگ برای مغزینو — یک کار که خوب معرفی شود،
// از چند کارت خالی بهتر است. کارهای بعدی کنارش اضافه می‌شوند.
import type { Content } from "@/content/en";
import { site } from "@/content/site";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import styles from "./Works.module.css";

export function Works({ t, maqzinoHref }: { t: Content; maqzinoHref: string }) {
  const { maqzino } = t.works;

  // لینک استور فقط وقتی نشان داده می‌شود که واقعاً باز شود. تا آن روز، وضعیتش
  // به‌صورت متن می‌آید — دکمه‌ای که به صفحهٔ ۴۰۴ می‌رود، از نبودنش بدتر است.
  const stores = [
    { name: "Cafe Bazaar", url: site.maqzino.bazaar },
    { name: "Myket", url: site.maqzino.myket },
  ];

  return (
    <section id="works" className={`page section ${styles.works}`}>
      <Reveal>
        <SectionHeading label={t.nav.works} title={t.works.heading} />
        <p className={styles.lead}>{t.works.lead}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <article className={styles.card}>
          <div className={styles.visual}>
            <PhoneFrame alt={maqzino.screenshotAlt} />
          </div>

          <div className={styles.body}>
            <p className={styles.role}>{maqzino.role}</p>
            <h3 className={styles.name}>{maqzino.name}</h3>
            <p className={styles.tagline}>{maqzino.tagline}</p>
            <p className={styles.description}>{maqzino.description}</p>

            <ul className={styles.features}>
              {maqzino.features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <ul className={styles.chips}>
              {maqzino.stack.map(s => (
                <li key={s} className={styles.chip}>
                  {s}
                </li>
              ))}
            </ul>

            <div className={styles.availability}>
              <p className={styles.availabilityTitle}>{maqzino.statusHeading}</p>
              <ul className={styles.stores}>
                {stores.map(store => (
                  <li key={store.name} className={styles.store}>
                    <span>{store.name}</span>
                    {store.url ? (
                      <a href={store.url} target="_blank" rel="noopener">
                        {maqzino.get}
                      </a>
                    ) : (
                      <span className={styles.pending}>{maqzino.inReview}</span>
                    )}
                  </li>
                ))}
              </ul>
              <a href={site.maqzino.privacy} className={styles.privacy}>
                {maqzino.privacy}
              </a>
            </div>

            <a href={maqzinoHref} className={styles.more}>
              {maqzino.more}{" "}
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>

            <p className={styles.credit}>{maqzino.credit}</p>
          </div>
        </article>
      </Reveal>

      <Reveal delay={0.15}>
        <p className={styles.next}>
          <span className={styles.nextHeading}>{t.works.next.heading}</span>
          {t.works.next.text}
        </p>
      </Reveal>
    </section>
  );
}
