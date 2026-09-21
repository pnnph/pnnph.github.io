/**
 * نوشته‌های بلاگ.
 *
 * هر نوشته یک شیء است با نشانی (slug)، تاریخ، و متنش در هر دو زبان.
 * دو زبان کنار هم در یک شیء می‌نشینند تا دکمهٔ تعویض زبان روی صفحهٔ نوشته
 * همیشه بداند به کجا برود.
 *
 * بدنهٔ متن یک فهرست است و دو شکل دارد:
 *   "یک جملهٔ عادی"      →  پاراگراف
 *   ["h", "یک تیتر"]      →  تیتر میانی
 *   ["q", "یک جمله"]      →  جملهٔ برجسته
 * برای اضافه‌کردن نوشتهٔ تازه، فقط یک شیء دیگر به ابتدای همین فهرست بگذار.
 */

/** یک تکه از بدنهٔ متن: یا پاراگراف ساده، یا تیتر، یا جملهٔ برجسته. */
export type Block = string | ["h" | "q", string];

export type PostText = {
  title: string;
  /** یک جملهٔ کوتاه زیر عنوان؛ در فهرست بلاگ و در معرفی لینک هم همین می‌آید. */
  lede: string;
  body: Block[];
};

export type Post = {
  slug: string;
  /** تاریخ میلادی. آنچه روی صفحه دیده می‌شود، از همین ساخته می‌شود. */
  date: string;
  en: PostText;
  fa: PostText;
};

export const posts: Post[] = [
  {
    slug: "a-name-with-no-picture",
    date: "2026-09-21",

    fa: {
      title: "اسمی که تصویری ندارد",
      lede: "مغزینو از یک لحظهٔ تکراری در اتاق درمان بیرون آمد؛ جایی که نامی گفته می‌شود و کسی نمی‌تواند تصویرش کند.",
      body: [
        "در اتاق درمان، کلمه‌ها زود از دست آدم می‌افتند. «هیپوکامپ» را می‌گویی و می‌بینی که طرف مقابلت سر تکان می‌دهد، ولی چیزی ندیده. نام را شنیده و تصویری نگرفته. همین فاصله — میان شنیدن یک نام و دیدن یک چیز — سال‌ها جلوی چشمم بود.",
        "کتاب‌های آناتومی این فاصله را پر نمی‌کنند؛ فقط جابه‌جایش می‌کنند. کاری که می‌کنند این است که عضوی سه‌بعدی را روی کاغذ صاف می‌کنند و بعد از خواننده می‌خواهند دوباره در ذهنش برجسته‌اش کند. برای کسی که سال‌ها با این تصویرها زندگی کرده آسان است. برای بقیه — که بیشترشان‌اند — تقریباً شدنی نیست.",
        "می‌خواستم چیزی باشد که بشود در دست چرخاندش.",

        ["h", "بیرون گذاشتن"],
        "در روایت‌درمانی حرکتی هست به نام برون‌سازی: مسئله را از آدم جدا می‌کنی و می‌گذاری بیرونش، روی میز، تا بشود نگاهش کرد و دورش چرخید و دربارهٔ آن حرف زد — بی‌آنکه حرف‌زدن دربارهٔ آن، حرف‌زدن دربارهٔ خودِ آدم باشد.",
        "مغزینو همین حرکت است، فقط با یک عضو. مغز از جمجمه بیرون می‌آید، داخل بدنی شیشه‌ای معلق می‌ماند، و تو می‌چرخانی‌اش. آنچه بتوانی بچرخانی دیگر راز نیست؛ شیء است. و با شیء می‌شود کنار آمد.",
        ["q", "چیزی که بتوانی در دست بچرخانی، دیگر ترسناک نیست."],

        ["h", "چهار زاویه، چون یکی کافی نیست"],
        "وقتی از کسی بپرسی «لوب گیجگاهی چیست؟»، پاسخ به این بستگی دارد که از چه کسی پرسیده‌ای. آناتومیست می‌گوید کجا نشسته و همسایه‌هایش کیستند. عصب‌شناس می‌گوید وقتی آسیب ببیند چه چیزی از دست می‌رود. زیست‌شناس می‌گوید از چه ساخته شده. و کسی که فرگشت می‌داند می‌گوید اصلاً چرا به وجود آمده — کدام مسئله را برای جانورانی حل کرده که ما از آن‌ها آمده‌ایم.",
        "هر چهار پاسخ درست‌اند و هیچ‌کدام جای دیگری را نمی‌گیرد. من خودم از دو راه به مغز رسیدم: یک‌بار به‌عنوان درمانگری که باید بداند چه چیزی می‌شکند، و یک‌بار از سر کنجکاوی محض که چرا اصلاً این‌طور ساخته شده. مغزینو مجبور نیست بین این دو یکی را انتخاب کند، پس نمی‌کند: هر ناحیه چهار زبانه دارد و تو انتخاب می‌کنی از کدام در وارد شوی.",

        ["h", "چرا باید زیبا باشد"],
        "اپ‌های آناتومی معمولاً شبیه فرم اداری‌اند: خاکستری، شلوغ، پر از دکمه. انگار قرار است جدی‌بودن را با زشتی ثابت کنند.",
        "من از تایپوگرافی و عکاسی می‌آیم و این معامله را قبول ندارم. مغزینو تیره است چون اغلب شب و در تخت‌خواب باز می‌شود. یک رنگ تأکید دارد و نه بیشتر، چون وقتی همه‌چیز مهم باشد هیچ‌چیز مهم نیست. تبلیغ ندارد، آمارگیری ندارد، و اصلاً اجازهٔ اینترنت نمی‌گیرد — نه برای اینکه ویژگی جذابی باشد، بلکه چون نمی‌خواهم بین کسی و مغز خودش چیز دیگری بایستد.",

        ["h", "روی شانهٔ چیزی که مال همه است"],
        "مدل سه‌بعدی از پروژهٔ آزاد Z-Anatomy می‌آید، با مجوز CC BY-SA. من از صفر جمجمه نساختم؛ روی کاری ایستادم که دیگران باز گذاشته بودند، و به همان شکل باز نگهش داشتم.",
        "مغزینو بنا نیست کسی را متخصص کند. بنا است آن فاصلهٔ اول را کم کند — فاصلهٔ میان شنیدن یک نام و دیدن یک چیز. اگر کسی بعد از یک جلسه بتواند چشمش را ببندد و بداند هیپوکامپ کجای سرش است و چه شکلی است، کار خودش را کرده.",
      ],
    },

    en: {
      title: "A name with no picture",
      lede: "Maqzino came out of a moment that kept repeating in the consulting room: a name is said, and nobody can picture it.",
      body: [
        "In a consulting room, words slip out of people's hands. You say “hippocampus” and you watch the person nod — and see nothing. They have heard a name and received no picture. That gap, between hearing a name and seeing a thing, sat in front of me for years.",
        "Anatomy books do not close it; they only move it. What they do is flatten a three-dimensional organ onto paper and then ask the reader to make it solid again in their head. For someone who has lived with those plates for years this is easy. For everyone else — which is most people — it is close to impossible.",
        "I wanted something you could turn in your hand.",

        ["h", "Putting it outside"],
        "Narrative therapy has a move called externalising: you separate the problem from the person and set it down outside them, on the table, where it can be looked at and walked around and talked about — without talking about it being the same as talking about them.",
        "Maqzino is that move, performed on an organ. The brain comes out of the skull, hangs inside a glass body, and you rotate it. Something you can rotate is no longer a mystery; it is an object. And an object is something you can live alongside.",
        ["q", "Something you can turn in your hand stops being frightening."],

        ["h", "Four angles, because one is never enough"],
        "Ask what the temporal lobe is and the answer depends on who you asked. An anatomist tells you where it sits and who its neighbours are. A neurologist tells you what is lost when it is damaged. A biologist tells you what it is made of. And someone who thinks in evolutionary time tells you why it is there at all — which problem it solved for the animals we descend from.",
        "All four are true and none of them substitutes for the others. I came to the brain twice: once as a therapist who has to know what breaks, and once out of plain curiosity about why any of it is built this way. Maqzino does not have to choose between those, so it doesn't. Every region carries four tabs, and you pick the door you come in through.",

        ["h", "Why it has to be beautiful"],
        "Anatomy apps usually look like government forms — grey, crowded, all buttons, as though seriousness had to be proved by ugliness.",
        "I come from typography and photography and I don't accept that trade. Maqzino is dark because it is mostly opened at night, in bed. It has one accent colour and no more, because when everything is important nothing is. It carries no ads, no analytics, and does not even ask for internet permission — not as a selling point, but because I don't want anything standing between a person and their own brain.",

        ["h", "Standing on something held in common"],
        "The 3D model comes from the open Z-Anatomy project, under CC BY-SA. I did not build a skull from nothing; I stood on work other people left open, and left it open the same way.",
        "Maqzino is not trying to make anyone an expert. It is trying to close that first gap — between hearing a name and seeing a thing. If someone can shut their eyes after one session and know where the hippocampus sits in their head and what shape it is, it has done its job.",
      ],
    },
  },
];

/** نوشته‌ها از تازه به قدیم. */
export const postsByDate = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const postBySlug = (slug: string) => posts.find(p => p.slug === slug);

/**
 * زمان تقریبی خواندن، به دقیقه. سرعت ۲۰۰ کلمه در دقیقه برای هر دو زبان،
 * که برای متنی در این طول اختلافش دیده نمی‌شود.
 */
export function readingMinutes(body: Block[]): number {
  const words = body
    .map(b => (typeof b === "string" ? b : b[1]))
    .join(" ")
    .trim()
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
