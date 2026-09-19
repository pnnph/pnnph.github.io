// صفحهٔ اختصاصی مغزینو — همان محتوای کارت صفحهٔ اصلی، اما کامل:
// توضیح، ویژگی‌ها، چهار زاویهٔ علمی، گالری تصویرها، و وضعیت انتشار.
import type { Content } from "@/content/en";
import { site } from "@/content/site";
import { Background } from "./Background";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { SmoothScroll } from "./SmoothScroll";
import styles from "./MaqzinoPage.module.css";

export function MaqzinoPage({
  t,
  home,
  otherLanguageHref,
}: {
  t: Content;
  home: string;
  otherLanguageHref: string;
}) {
  const { maqzino } = t.works;
  const page = t.maqzinoPage;

  const stores = [
    { name: "Cafe Bazaar", url: site.maqzino.bazaar },
    { name: "Myket", url: site.maqzino.myket },
  ];

  return (
    <>
      <SmoothScroll />
      <Background />
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>
      <Header t={t} home={home} otherLanguageHref={otherLanguageHref} />

      <main id="main" className="page">
        <article>
          <Reveal>
            <header className={styles.head}>
              <a href={`${home}#works`} className={styles.back}>
                <span className={styles.arrow} aria-hidden="true">
                  ←
                </span>{" "}
                {page.back}
              </a>

              <img
                src="/assets/brand/app-icon/maqzino-store-icon-512.png"
                alt=""
                width={512}
                height={512}
                className={styles.icon}
              />

              <p className={styles.eyebrow}>{page.eyebrow}</p>
              <h1 className={styles.title}>{maqzino.name}</h1>
              <p className={styles.tagline}>{maqzino.tagline}</p>
              <p className={styles.role}>{maqzino.role}</p>
            </header>
          </Reveal>

          <Reveal delay={0.05}>
            <section className={styles.section}>
              <h2 className={styles.heading}>{page.overviewHeading}</h2>
              <p className={styles.body}>{maqzino.description}</p>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className={styles.section}>
              <h2 className={styles.heading}>{page.featuresHeading}</h2>
              <ul className={styles.features}>
                {maqzino.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className={styles.section}>
              <h2 className={styles.heading}>{page.anglesHeading}</h2>
              <div className={styles.angles}>
                {page.angles.map(angle => (
                  <div key={angle.title} className={styles.angle}>
                    <h3 className={styles.angleTitle}>{angle.title}</h3>
                    <p className={styles.angleText}>{angle.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className={styles.section}>
              <h2 className={styles.heading}>{page.galleryHeading}</h2>
              <p className={styles.note}>{page.galleryNote}</p>
              <Gallery
                captions={page.shots}
                labels={{ close: page.close, previous: page.previous, next: page.next }}
              />
            </section>
          </Reveal>

          <Reveal delay={0.05}>
            <section className={styles.section}>
              <h2 className={styles.heading}>{page.stackHeading}</h2>
              <ul className={styles.chips}>
                {maqzino.stack.map(s => (
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
                    {/* دکمه فقط وقتی می‌آید که آدرسش واقعاً باز شود. */}
                    {store.url ? (
                      <a href={store.url}>{store.name}</a>
                    ) : (
                      <span className={styles.pending}>{maqzino.inReview}</span>
                    )}
                  </li>
                ))}
              </ul>
              <a href={site.maqzino.privacy} className={styles.privacy}>
                {maqzino.privacy}
              </a>
              <p className={styles.credit}>{maqzino.credit}</p>
            </section>
          </Reveal>
        </article>
      </main>

      <Footer t={t} />
    </>
  );
}
