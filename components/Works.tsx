// «پروژه‌ها». فعلاً یک کارت بزرگ برای مغزینو — یک کار که خوب معرفی شود،
// از چند کارت خالی بهتر است. کارهای بعدی کنارش اضافه می‌شوند.
// اولینشان دلفی دیجیتال است، در کارتی کوچک‌تر زیر مغزینو.
import type { Content } from "@/content/en";
import { site } from "@/content/site";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import styles from "./Works.module.css";

export function Works({ t, maqzinoHref }: { t: Content; maqzinoHref: string }) {
  const { maqzino, delphi } = t.works;

  // لینک استور فقط وقتی نشان داده می‌شود که واقعاً باز شود. تا آن روز، وضعیتش
  // به‌صورت متن می‌آید — دکمه‌ای که به صفحهٔ ۴۰۴ می‌رود، از نبودنش بدتر است.
  // دو فروشگاه در زبانهٔ تازه باز می‌شوند؛ نسخهٔ وب بخشی از همین سایت است و در همین زبانه
  // — همان فهرست صفحهٔ مغزینو (MaqzinoPage.tsx)
  const stores = [
    { name: "Cafe Bazaar", url: site.maqzino.bazaar, action: maqzino.get, external: true },
    { name: "Myket", url: site.maqzino.myket, action: maqzino.get, external: true },
    { name: maqzino.web, url: site.maqzino.web, action: maqzino.open, external: false },
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
                      <a
                        href={store.url}
                        {...(store.external ? { target: "_blank", rel: "noopener" } : {})}
                        className={styles.storeLink}
                      >
                        {store.action}
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
              {/* فاصلهٔ بین متن و فلش از gap می‌آید، نه از یک فاصلهٔ متنی. */}
              {maqzino.more}
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>

            {/* حمایت، بعد از دکمهٔ اصلی: اول اپ را معرفی کن، بعد بگو اگر به کارش
                آمد می‌شود حمایت کرد. دکمه‌اش اینجا عمداً قرص آرام است نه گرادیانی،
                چون هر نما فقط یک دکمهٔ اصلی دارد و آن «بیشتر دربارهٔ مغزینو» است.
                در صفحهٔ خودِ مغزینو برعکس است: آنجا حمایت دکمهٔ اصلی می‌شود. */}
            <div className={styles.support}>
              <h4 className={styles.supportHeading}>{maqzino.supportHeading}</h4>
              <p className={styles.supportBody}>{maqzino.supportBody}</p>
              {site.support.hamibash ? (
                <a
                  href={site.support.hamibash}
                  target="_blank"
                  rel="noopener"
                  className={styles.supportLink}
                >
                  {maqzino.supportAction}
                </a>
              ) : null}
            </div>

            <p className={styles.credit}>{maqzino.credit}</p>
          </div>
        </article>
      </Reveal>

      {/* همان شیشه، بی تصویر و بی دکمهٔ گرادیانی: دکمهٔ اصلیِ این بخش مال مغزینو است. */}
      <Reveal delay={0.1}>
        <article className={`${styles.card} ${styles.compact}`}>
          <div className={styles.compactBody}>
            <p className={styles.role}>{delphi.role}</p>
            <h3 className={styles.name}>{delphi.name}</h3>
            <p className={styles.description}>{delphi.description}</p>
            <p className={styles.product}>{delphi.product}</p>

            <ul className={styles.chips}>
              {delphi.stack.map(s => (
                <li key={s} className={styles.chip}>
                  {s}
                </li>
              ))}
            </ul>

            <ul className={styles.stores}>
              <li className={styles.store}>
                <span>{new URL(site.delphi.site).host}</span>
                <a href={site.delphi.site} target="_blank" rel="noopener" className={styles.storeLink}>
                  {delphi.visit}
                </a>
              </li>
              <li className={styles.store}>
                <span>{delphi.bamboo}</span>
                <a href={site.delphi.bamboo} target="_blank" rel="noopener" className={styles.storeLink}>
                  {maqzino.get}
                </a>
              </li>
            </ul>
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
