// «تماس با من». بدون فرم — یک دکمه که برنامهٔ ایمیل کاربر را با گیرنده و موضوعِ
// آماده باز می‌کند، به‌علاوهٔ شبکه‌های اجتماعی. آدرس در content/site.ts است.
import type { Content } from "@/content/en";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import styles from "./Contact.module.css";

export function Contact({ t }: { t: Content }) {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.contact.emailSubject)}`;

  const links = [
    { label: t.contact.instagram, url: site.social.instagram },
    { label: t.contact.linkedin, url: site.social.linkedin },
    { label: t.contact.github, url: site.social.github },
  ];

  return (
    <section id="contact" className={`page section ${styles.contact}`}>
      <Reveal>
        <SectionHeading label={t.nav.contact} title={t.contact.heading} />
        <p className={styles.lead}>{t.contact.lead}</p>

        <a href={mailto} className={styles.button}>
          {t.contact.emailButton}
        </a>

        <p className={styles.email}>{site.email}</p>

        <ul className={styles.social}>
          {links.map(link => (
            <li key={link.url}>
              <a href={link.url} className={styles.socialLink} rel="me noopener" target="_blank">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
