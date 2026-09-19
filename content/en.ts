/**
 * Every English string on the site.
 * The English is written, not translated word for word from the Persian.
 */

export const en = {
  meta: {
    title: "Peiman Asgari",
    description:
      "Psychologist, designer and web & mobile developer. Maker of Maqzino, an interactive 3D atlas of the human brain.",
  },

  nav: {
    skip: "Skip to content",
    story: "My story",
    works: "My work",
    resume: "Download CV",
    contact: "Get in touch",
    switchLanguage: "فارسی",
    theme: "Switch theme",
  },

  hero: {
    eyebrow: "Portfolio",
    photoAlt: "Peiman Asgari",
    photoPlaceholder: "Your photo goes here",
    name: "Peiman Asgari",
    title: "Psychologist, designer, web & mobile developer",
    intro:
      "I'm Peiman — a psychologist and trauma therapist who builds things. Art, digital design, and software for the web and for phones.",
    seeWorks: "See my work",
    contact: "Get in touch",
  },

  about: {
    heading: "My story",
    skills: "Skills",
    education: "Education",
    interests: "Interests",
    gallery: "Gallery",
  },

  works: {
    heading: "My work",
    maqzino: {
      name: "Maqzino",
      tagline: "Interactive 3D atlas of the human brain — touch and learn",
      description:
        "Maqzino is an interactive 3D atlas of the human brain. Rotate the model, tap any part and read about it.",
      credit: "3D model based on the open Z-Anatomy project (CC BY-SA 4.0).",
    },
  },

  contact: {
    heading: "Get in touch",
    emailButton: "Send an email",
    emailSubject: "Hello Peiman",
  },

  footer: {
    rights: "Peiman Asgari",
  },
};

/** شکل محتوا. فارسی هم باید دقیقاً همین کلیدها را داشته باشد، وگرنه build خطا می‌دهد. */
export type Content = typeof en;
