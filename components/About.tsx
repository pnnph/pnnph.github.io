// «داستان من»: متن معرفی، بعد سه کارت شیشه‌ای — مهارت‌ها، تحصیلات، علایق.
// ساختارش طوری است که اضافه‌کردن بخش تازه فقط یک کارت دیگر است.
import type { Content } from "@/content/en";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import styles from "./About.module.css";

export function About({ t }: { t: Content }) {
  const { about } = t;

  return (
    <section id="story" className={`page section ${styles.about}`}>
      <Reveal>
        <SectionHeading label={t.nav.story} title={about.heading} />
      </Reveal>

      <Reveal delay={0.05}>
        <p className={styles.lead}>{about.lead}</p>
        {about.paragraphs.map(p => (
          <p key={p} className={styles.paragraph}>
            {p}
          </p>
        ))}
      </Reveal>

      <div className={styles.cards}>
        <Reveal delay={0.1} className={styles.card}>
          <h3 className={styles.cardTitle}>{about.skills.heading}</h3>
          {about.skills.groups.map(group => (
            <div key={group.title} className={styles.group}>
              <p className={styles.groupTitle}>{group.title}</p>
              <ul className={styles.chips}>
                {group.items.map(item => (
                  <li key={item} className={styles.chip}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.15} className={styles.card}>
          <h3 className={styles.cardTitle}>{about.education.heading}</h3>
          <ul className={styles.list}>
            {about.education.items.map(item => (
              <li key={item.degree} className={styles.entry}>
                <span className={styles.entryTitle}>{item.degree}</span>
                <span className={styles.entryMeta}>
                  {item.place} · {item.year}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className={styles.card}>
          <h3 className={styles.cardTitle}>{about.interests.heading}</h3>
          <ul className={styles.chips}>
            {about.interests.items.map(item => (
              <li key={item} className={styles.chip}>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
