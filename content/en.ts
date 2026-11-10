/**
 * Every English string on the site.
 * The English is written, not translated word for word from the Persian.
 */

/** یک مدرک. دانشگاه و سال اختیاری‌اند تا هر وقت آمدند فقط به این فایل اضافه شوند. */
export type Degree = { degree: string; place?: string; year?: string };

export const en = {
  /** For formatting dates and numbers at build time. */
  locale: "en-GB",

  meta: {
    title: "Peiman Asgari",
    description:
      "Psychologist, designer and web & mobile developer. Maker of Maqzino, an interactive 3D atlas of the human brain.",
  },

  nav: {
    skip: "Skip to content",
    story: "My story",
    works: "My work",
    blog: "Notes",
    resume: "Download CV",
    contact: "Get in touch",
    switchLanguage: "FA",
    theme: "Switch theme",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    eyebrow: "Portfolio",
    photoAlt: "Peiman Asgari",
    photoPlaceholder: "Your photo goes here",
    name: "Peiman Asgari",
    given: "Peiman",
    family: "Asgari",
    badge: "peiman asgari portfolio",
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
      items: [
        { degree: "PhD student, Psychology" },
        { degree: "MA, Counselling" },
        { degree: "MSc, Artificial Intelligence" },
        { degree: "BSc, Computer Programming" },
      ] as Degree[],
    },

    interests: {
      heading: "Interests",
      items: ["Art", "Digital design", "Neuroscience", "Typography", "Photography"],
    },
  },

  works: {
    heading: "My work",
    lead: "A few things, each described properly rather than half-told.",

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
      get: "Get it",
      // نسخهٔ وب مغزینو (PWA) — همان اپ در مرورگر، برای آیفون و کامپیوتر
      web: "Web — iPhone, iPad, computer",
      open: "Open",
      supportHeading: "Support Maqzino",
      supportBody:
        "Maqzino is free and stays free — no ads, no analytics, nothing locked behind a payment. If it was useful to you and you would like the work to continue, you can chip in. It unlocks nothing in the app; it just makes the next version more likely.",
      supportAction: "Support the work",
      privacy: "Privacy policy",
      credit: "3D model based on the open Z-Anatomy project (CC BY-SA 4.0).",
      screenshotAlt: "Maqzino on a phone: the 3D brain, a selected region, and explode mode",
      more: "More about Maqzino",
    },

    delphi: {
      kicker: "The platform",
      name: "Delphi Digital",
      role: "Founder and lead developer",
      description:
        "The digital arm of the Delphi psychology clinic in Tehran, and the home of everything I make: apps and sites for self-knowledge and mental health care. Each one has its own address and look, and all of them keep one promise — made by psychologists, privacy first.",
      points: [
        "One showcase for every product, each standing as a pillar of its own",
        "No trackers and no ads, on the showcase or in the apps",
        "Maqzino and Bamboo live there today; the next one gets the empty pillar",
      ],
      shotAlt: "The Delphi Digital showcase: a pillar for each tool, with Bamboo and Maqzino",
      visit: "Visit delphidigitalis.com",
      products: "On Delphi Digital",
    },

    bamboo: {
      name: "Bamboo",
      role: "Design and development — web and Android",
      tagline: "Life skills and peace of mind, one step a day",
      description:
        "Bamboo teaches life skills and ways of coping, in Persian. A short lesson or exercise each day, a calm practice when you need one, and a shelter for the stormy days — like the bamboo that bends in the storm but does not break.",
      features: [
        "Ten life skills, such as problem solving, assertive conversation and soothing yourself",
        "Eleven of life's harder challenges — anxiety, anger, grief, loneliness, illness and more — each a short course",
        "Breathing and calm exercises, a mood calendar, and a stem that grows with every day of practice",
        "A free safety layer that works offline and without an account: SOS, crisis lines, a safety plan and a shelter",
        "What you write is encrypted on your own phone; no trackers, no ads",
        "Written by psychologists; every sensitive text is clinically reviewed before it ships",
      ],
      stack: ["React", "TypeScript", "Vite", "PWA", "Capacitor", "IndexedDB"],
      web: "Web — iPhone, computer",
      soon: "Soon",
      webAlt: "Bamboo on a computer: today's mood, the growing stem and the install prompt",
      screenshotAlt: "Bamboo on a phone: today's mood, the skills, calm exercises and the shelter",
      more: "More about Bamboo",
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
    galleryNote: "English interface, dark theme. Tap any screen to see it larger.",
    shots: [
      "The whole brain inside the glass body, with the action bar",
      "Left temporal lobe selected, with its name card and the listen button",
      "The info panel: names, pronunciation, function and the category tabs",
      "Right lateral ventricle, pulled out of the brain with 'fade others'",
      "Explode mode at 86 per cent — every piece pulled apart",
      "Searching for a region by name",
      "The settings menu",
      "The app's navigation menu",
      "Signing in to the app",
      "The subcortical structures",
    ],
    stackHeading: "Built with",
    close: "Close",
    previous: "Previous",
    next: "Next",
  },

  bambooPage: {
    phoneHeading: "On the phone",
    phoneNote: "Android app and phone browser, Persian interface. Tap any screen to see it larger.",
    phoneShots: [
      "The welcome screen: Life Skills & Peace of Mind",
      "Today: how you feel, today's step and the growing stem",
      "The skills, life challenges and situations as a field of bubbles",
      "Calm exercises, from one breath to the sound of bamboo in the wind",
      "Breathing together: touch the ring and let the light guide you",
      "Ready to begin: choose one breath, one, three or five minutes",
      "The shelter for stormy days, offline and without an account",
      "A shelter chapter: financial pressure, in five-minute steps",
      "SOS: one breath right now, grounding, crisis lines and the safety plan",
      "Me: the mood calendar, your stem, the safety plan and backup",
    ],
    webHeading: "On a computer",
    webNote: "The same app as a web app, installable from the browser.",
    webShots: [
      "Today, with the offer to install Bamboo like an app",
      "The skills map: every skill, challenge and situation as a star",
      "SOS opens over whatever you were doing",
      "Your stem: one knot for each day of practice",
      "Breathing together, on a wide screen",
      "The welcome screen",
    ],
    platform: "Bamboo is a product of",
  },

  blog: {
    eyebrow: "Notes",
    heading: "Notes",
    lead: "Occasional writing about the things I build and the ideas underneath them.",
    empty: "Nothing here yet.",
    back: "All notes",
    readTime: "min read",
    postEyebrow: "Note",
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

  notFound: {
    heading: "This page does not exist",
    text: "The link may be old, or mistyped.",
    home: "Back to the home page",
  },

  footer: {
    rights: "Peiman Asgari",
    note: "Built by hand.",
  },
};

/** شکل محتوا. فارسی هم باید دقیقاً همین کلیدها را داشته باشد، وگرنه build خطا می‌دهد. */
export type Content = typeof en;
