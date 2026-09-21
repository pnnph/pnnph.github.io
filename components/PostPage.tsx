// یک یادداشت — آدرس /blog/<slug>/ و /fa/blog/<slug>/
//
// بدنهٔ متن یک فهرست ساده در content/posts.ts است: رشتهٔ تنها یعنی پاراگراف،
// ["h", ...] یعنی تیتر میانی و ["q", ...] یعنی جملهٔ برجسته.
import type { Content } from "@/content/en";
import type { Language } from "@/content/site";
import type { Post } from "@/content/posts";
import { readingMinutes } from "@/content/posts";
import { Background } from "./Background";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { SmoothScroll } from "./SmoothScroll";
import { formatDate, formatNumber } from "@/lib/format";
import styles from "./Blog.module.css";

export function PostPage({
  t,
  lang,
  post,
  home,
  blogHref,
  otherLanguageHref,
  resumeHref,
}: {
  t: Content;
  lang: Language;
  post: Post;
  home: string;
  blogHref: string;
  otherLanguageHref: string;
  resumeHref: string;
}) {
  const text = post[lang];
  const minutes = readingMinutes(text.body);

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
        <article className={styles.article}>
          <Reveal>
            <header className={styles.postHead}>
              <a href={blogHref} className={styles.back}>
                <span className={styles.arrow} aria-hidden="true">
                  ←
                </span>{" "}
                {t.blog.back}
              </a>

              <p className={styles.eyebrow}>{t.blog.postEyebrow}</p>
              <h1 className={styles.postTitle}>{text.title}</h1>
              <p className={styles.meta}>
                <time dateTime={post.date}>{formatDate(post.date, t.locale)}</time>
                <span aria-hidden="true"> · </span>
                {formatNumber(minutes, t.locale)} {t.blog.readTime}
              </p>
              <p className={styles.postLede}>{text.lede}</p>
            </header>
          </Reveal>

          <Reveal delay={0.05}>
            <div className={styles.body}>
              {text.body.map((block, i) => {
                if (typeof block === "string") {
                  return <p key={i}>{block}</p>;
                }
                const [kind, value] = block;
                return kind === "h" ? (
                  <h2 key={i} className={styles.subheading}>
                    {value}
                  </h2>
                ) : (
                  <blockquote key={i} className={styles.quote}>
                    {value}
                  </blockquote>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <footer className={styles.postFoot}>
              <a href={blogHref} className={styles.back}>
                <span className={styles.arrow} aria-hidden="true">
                  ←
                </span>{" "}
                {t.blog.back}
              </a>
            </footer>
          </Reveal>
        </article>
      </main>

      <Footer t={t} />
    </>
  );
}
