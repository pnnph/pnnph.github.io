// «پروژه‌ها». اول نوار دلفی دیجیتال، سکو و ویترین همهٔ محصولات؛ بعد هر محصول در
// کارت بزرگ خودش: مغزینو، بامبو. هر کارت یک کار را درست معرفی می‌کند —
// از چند کارت نیم‌بند بهتر است.
import type { Content } from "@/content/en";
import { site } from "@/content/site";
import { BAMBOO_PHONE_CYCLE, BAMBOO_WEB, DELPHI_SHOT } from "./bambooShots";
import { BrowserFrame } from "./BrowserFrame";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import styles from "./Works.module.css";

export function Works({
  t,
  maqzinoHref,
  bambooHref,
}: {
  t: Content;
  maqzinoHref: string;
  bambooHref: string;
}) {
  const { maqzino, delphi, bamboo } = t.works;
  const delphiHost = new URL(site.delphi.site).host;

  // لینک استور فقط وقتی نشان داده می‌شود که واقعاً باز شود. تا آن روز، وضعیتش
  // به‌صورت متن می‌آید — دکمه‌ای که به صفحهٔ ۴۰۴ می‌رود، از نبودنش بدتر است.
  // دو فروشگاه در زبانهٔ تازه باز می‌شوند؛ نسخهٔ وب بخشی از همین سایت است و در همین زبانه
  // — همان فهرست صفحهٔ مغزینو (MaqzinoPage.tsx)
  const stores = [
    { name: "Cafe Bazaar", url: site.maqzino.bazaar, action: maqzino.get, external: true },
    { name: "Myket", url: site.maqzino.myket, action: maqzino.get, external: true },
    { name: maqzino.web, url: site.maqzino.web, action: maqzino.open, external: false },
  ];

  // نسخهٔ وب بامبو تا روز انتشار پشت رمز است؛ تا آن روز «به‌زودی».
  const bambooStores = [
    { name: "Cafe Bazaar", url: site.delphi.bamboo, action: maqzino.get },
    { name: bamboo.web, url: site.delphi.bambooWeb, action: maqzino.open },
  ];

  return (
    <section id="works" className={`page section ${styles.works}`}>
      <Reveal>
        <SectionHeading label={t.nav.works} title={t.works.heading} />
        <p className={styles.lead}>{t.works.lead}</p>
      </Reveal>

      {/* سکو: پهن، با عکس ویترین. دکمه‌اش قرص آرام است — دکمهٔ گرادیانی مال کارت‌های محصول است. */}
      <Reveal delay={0.05}>
        <article className={`${styles.card} ${styles.platform}`}>
          <div className={styles.body}>
            <p className={styles.kicker}>{delphi.kicker}</p>
            <h3 className={styles.name}>{delphi.name}</h3>
            <p className={styles.role}>{delphi.role}</p>
            <p className={styles.description}>{delphi.description}</p>
            <ul className={styles.features}>
              {delphi.points.map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <a href={site.delphi.site} target="_blank" rel="noopener" className={styles.storeLink}>
              {delphi.visit}
            </a>
          </div>
          <div className={styles.platformVisual}>
            <BrowserFrame src={DELPHI_SHOT} alt={delphi.shotAlt} address={delphiHost} />
          </div>
        </article>
      </Reveal>

      <Reveal delay={0.05}>
        <p className={styles.products}>{delphi.products}</p>
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

      {/* بامبو هم وب است هم اندروید، پس تصویرش لپ‌تاپ و گوشی کنار هم است. */}
      <Reveal delay={0.1}>
        <article className={`${styles.card} ${styles.cardWide}`}>
          <div className={styles.devices}>
            <BrowserFrame src={BAMBOO_WEB[0]} alt={bamboo.webAlt} address="bamboo.delphidigitalis.com" />
            <div className={styles.devicePhone}>
              <PhoneFrame alt={bamboo.screenshotAlt} shots={BAMBOO_PHONE_CYCLE} width={600} height={1290} />
            </div>
          </div>

          <div className={styles.body}>
            <p className={styles.role}>{bamboo.role}</p>
            <h3 className={styles.name}>{bamboo.name}</h3>
            <p className={styles.tagline}>{bamboo.tagline}</p>
            <p className={styles.description}>{bamboo.description}</p>

            <ul className={styles.features}>
              {bamboo.features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <ul className={styles.chips}>
              {bamboo.stack.map(s => (
                <li key={s} className={styles.chip}>
                  {s}
                </li>
              ))}
            </ul>

            <div className={styles.availability}>
              <p className={styles.availabilityTitle}>{maqzino.statusHeading}</p>
              <ul className={styles.stores}>
                {bambooStores.map(store => (
                  <li key={store.name} className={styles.store}>
                    <span>{store.name}</span>
                    {store.url ? (
                      <a href={store.url} target="_blank" rel="noopener" className={styles.storeLink}>
                        {store.action}
                      </a>
                    ) : (
                      <span className={styles.pending}>{bamboo.soon}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <a href={bambooHref} className={styles.more}>
              {bamboo.more}
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>
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
