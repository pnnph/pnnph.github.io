// صفحهٔ اختصاصی بامبو — همان قالب صفحهٔ مغزینو: معرفی، ویژگی‌ها، دو گالری (گوشی و
// کامپیوتر)، ابزارها و وضعیت انتشار. برچسب‌های مشترک (بازگشت، عنوان بخش‌ها) از maqzinoPage
// می‌آیند تا دو نسخه از یک جمله نداشته باشیم.
import type { Content } from "@/content/en";
import { site } from "@/content/site";
import { Background } from "./Background";
import { BAMBOO_PHONE, BAMBOO_WEB } from "./bambooShots";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { SmoothScroll } from "./SmoothScroll";
import styles from "./MaqzinoPage.module.css";

export function BambooPage({
  t,
  home,
  blogHref,
  otherLanguageHref,
  resumeHref,
}: {
  t: Content;
  home: string;
  blogHref: string;
  otherLanguageHref: string;
  resumeHref: string;
}) {
  const { bamboo, maqzino, delphi } = t.works;
  const shared = t.maqzinoPage;
  const page = t.bambooPage;
  const labels = { close: shared.close, previous: shared.previous, next: shared.next };

  // نسخهٔ وب تا روز انتشار پشت رمز است؛ تا آن روز «به‌زودی».
  const stores = [
    { name: "Cafe Bazaar", url: site.delphi.bamboo, action: maqzino.get },
    { name: bamboo.web, url: site.delphi.bambooWeb, action: maqzino.open },
  ];

  return (
    <>
      <SmoothScroll />
      <Background />
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>
      <Header
        t={t}
        home={home}
        blogHref={blogHref}
        otherLanguageHref={otherLanguageHref}
        resumeHref={resumeHref}
      />

      <main id="main" className="page">
        <article>
          <Reveal>
            <header className={styles.head}>
              <a href={`${home}#works`} className={styles.back}>
                <span className={styles.arrow} aria-hidden="true">
                  ←
                </span>{" "}
                {shared.back}
              </a>

              <img
                src="/assets/bamboo/icon.webp"
                alt=""
                width={256}
                height={256}
                className={styles.icon}
              />

              <p className={styles.eyebrow}>{shared.eyebrow}</p>
              <h1 className={styles.title}>{bamboo.name}</h1>
              <p className={styles.tagline}>{bamboo.tagline}</p>
              <p className={styles.role}>{bamboo.role}</p>
            </header>
          </Reveal>

          <Reveal delay={0.05}>
            <section className={styles.section}>
              <h2 className={styles.heading}>{shared.overviewHeading}</h2>
              <p className={styles.body}>{bamboo.description}</p>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className={styles.section}>
              <h2 className={styles.heading}>{shared.featuresHeading}</h2>
              <ul className={styles.features}>
                {bamboo.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className={styles.section}>
              <h2 className={styles.heading}>{page.phoneHeading}</h2>
              <p className={styles.note}>{page.phoneNote}</p>
              <Gallery captions={page.phoneShots} labels={labels} shots={BAMBOO_PHONE} width={600} height={1290} />
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className={styles.section}>
              <h2 className={styles.heading}>{page.webHeading}</h2>
              <p className={styles.note}>{page.webNote}</p>
              <Gallery captions={page.webShots} labels={labels} shots={BAMBOO_WEB} width={1600} height={830} wide />
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className={styles.section}>
              <h2 className={styles.heading}>{shared.stackHeading}</h2>
              <ul className={styles.chips}>
                {bamboo.stack.map(s => (
                  <li key={s} className={styles.chip}>
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className={styles.section}>
              <h2 className={styles.heading}>{maqzino.statusHeading}</h2>
              <ul className={styles.stores}>
                {stores.map(store => (
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
              <p className={styles.credit}>
                {page.platform}{" "}
                <a href={site.delphi.site} target="_blank" rel="noopener">
                  {delphi.name}
                </a>
              </p>
            </section>
          </Reveal>
        </article>
      </main>

      <Footer t={t} />
    </>
  );
}
