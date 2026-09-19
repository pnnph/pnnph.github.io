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
    openMenu: "Open menu",
    closeMenu: "Close menu",
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
    lead: "Two things I keep returning to: how a mind works, and how a thing should be made.",
    paragraphs: [
      "I trained as a psychologist and work with trauma. That work taught me to pay attention to what people actually experience, rather than to what a design or a product claims they experience.",
      "The rest of my time goes into building — interfaces, brands, Android apps, websites. Maqzino came out of both halves: an atlas of the brain that has to be scientifically right and pleasant to hold at the same time.",
    ],

    /* ⚠️ این‌ها پیش‌نویس‌اند — با واقعیت تطبیقشان بده. */
    skills: {
      heading: "Skills",
      groups: [
        { title: "Design", items: ["UI/UX", "Brand identity", "Motion", "Illustration"] },
        { title: "Mobile", items: ["Kotlin", "Jetpack Compose", "Android", "3D / SceneView"] },
        { title: "Web", items: ["HTML & CSS", "JavaScript", "React", "Next.js"] },
        { title: "Psychology", items: ["Trauma therapy", "Clinical psychology"] },
      ],
    },

    education: {
      heading: "Education",
      /* ⚠️ خالی است. رشته، دانشگاه و سال را اینجا بنویس. */
      items: [{ degree: "— degree —", place: "— university —", year: "—" }],
    },

    interests: {
      heading: "Interests",
      items: ["Art", "Digital design", "Neuroscience", "Typography", "Photography"],
    },
  },

  works: {
    heading: "My work",
    lead: "One finished thing, described properly, rather than five half-told ones.",

    maqzino: {
      name: "Maqzino",
      role: "Design and development — Android",
      tagline: "Interactive 3D atlas of the human brain — touch and learn",
      description:
        "Maqzino is an interactive 3D atlas of the human brain. Rotate the model, tap any part and read about it — what it does, and how it looks from four scientific angles: evolutionary, biological, neurological and anatomical.",
      features: [
        "21 regions and 38 tappable structures inside a translucent body",
        "Fade, hide or isolate any part to reach deep structures such as the hippocampus",
        "Explode mode pulls the brain apart piece by piece",
        "English pronunciation for every region",
        "Persian and English, light and dark, fully right-to-left",
        "Completely offline: no internet permission, no ads, no analytics",
      ],
      stack: ["Kotlin", "Jetpack Compose", "Hilt", "Room", "SceneView / Filament"],
      statusHeading: "Availability",
      inReview: "In review",
      privacy: "Privacy policy",
      credit: "3D model based on the open Z-Anatomy project (CC BY-SA 4.0).",
      screenshotAlt: "Maqzino on a phone: the 3D brain, a selected region, and explode mode",
      more: "More about Maqzino",
    },

    next: {
      heading: "What's next",
      text: "A separate site for my therapy practice, and the things I'm building after Maqzino.",
    },
  },


  maqzinoPage: {
    back: "All work",
    eyebrow: "Project",
    overviewHeading: "What it is",
    featuresHeading: "What it does",
    anglesHeading: "Four angles on every region",
    angles: [
      { title: "Evolutionary", text: "Why this part exists at all, and what it solved for the animals we descend from." },
      { title: "Biological", text: "What it is made of, how it is wired, and where it sits among its neighbours." },
      { title: "Neurological", text: "What happens when it works — and what changes when it is damaged." },
      { title: "Anatomical", text: "Its shape, its landmarks, and the Latin names you meet in textbooks." },
    ],
    galleryHeading: "Screens",
    galleryNote: "Persian interface, dark theme. Tap any screen to see it larger.",
    shots: [
      "The whole brain inside the glass body, with the action bar",
      "Left temporal lobe selected, with its name card and the listen button",
      "The info panel: names, pronunciation, function and the category tabs",
      "Left amygdala picked out with 'fade others'",
      "Explode mode at full strength, every piece separated",
      "Searching for a region by name",
    ],
    stackHeading: "Built with",
    close: "Close",
    previous: "Previous",
    next: "Next",
  },

  contact: {
    heading: "Get in touch",
    lead: "The fastest way to reach me is email. I read everything.",
    emailButton: "Send an email",
    emailSubject: "Hello Peiman",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    github: "GitHub",
  },

  footer: {
    rights: "Peiman Asgari",
    note: "Built by hand.",
  },
};

/** شکل محتوا. فارسی هم باید دقیقاً همین کلیدها را داشته باشد، وگرنه build خطا می‌دهد. */
export type Content = typeof en;
