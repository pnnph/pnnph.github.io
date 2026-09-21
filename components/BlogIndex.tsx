// فهرست یادداشت‌ها — آدرس /blog/ و /fa/blog/
//
// خود نوشته‌ها در content/posts.ts هستند. اینجا فقط مرتبشان می‌کند و نشان می‌دهد.
import type { Content } from "@/content/en";
import type { Language } from "@/content/site";
import { postsByDate, readingMinutes } from "@/content/posts";
import { Background } from "./Background";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SmoothScroll } from "./SmoothScroll";
import { formatDate, formatNumber } from "@/lib/format";
import styles from "./Blog.module.css";

export function BlogIndex({
  t,
  lang,
  home,
  blogHref,
  otherLanguageHref,
  resumeHref,
}: {
  t: Content;
  lang: Language;
  home: string;
  blogHref: string;
  otherLanguageHref: string;
  resumeHref: string;
}) {
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
        <Reveal>
          <div className={styles.head}>
            <SectionHeading label={t.blog.eyebrow} title={t.blog.heading} />
            <p className={styles.lead}>{t.blog.lead}</p>
          </div>
        </Reveal>

        {postsByDate.length === 0 ? (
          <p className={styles.empty}>{t.blog.empty}</p>
        ) : (
          <ul className={styles.list}>
            {postsByDate.map((post, i) => {
              const text = post[lang];
              const minutes = readingMinutes(text.body);
              return (
                <Reveal key={post.slug} delay={0.05 * i}>
                  <li className={styles.item}>
                    <a href={`${blogHref}${post.slug}/`} className={styles.card}>
                      <p className={styles.meta}>
                        <time dateTime={post.date}>{formatDate(post.date, t.locale)}</time>
                        <span aria-hidden="true"> · </span>
                        {formatNumber(minutes, t.locale)} {t.blog.readTime}
                      </p>
                      <h3 className={styles.cardTitle}>{text.title}</h3>
                      <p className={styles.cardLede}>{text.lede}</p>
                    </a>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        )}
      </main>

      <Footer t={t} />
    </>
  );
}
