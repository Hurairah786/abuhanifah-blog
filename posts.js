// ============================================================
//  POSTS DATA — edit this file to manage all blog content
//  To add a new article:
//    1. Create a new HTML file (copy article-template.html)
//    2. Add a new entry to the POSTS array below
//    3. The blog page, home page, and tag filters update automatically
// ============================================================

const TAGS = [
  "fiqh",
  "translations",
  "reflections",
  "books",
  "seerah",
  "tareekh",
  "hadith",
  "tafsir",
  "biography"
];

const POSTS = [
  {
    id: 1,
    title: "Is abandoning salah kufr?",
    subtitle: "Removing the confusion around a much discussed topic",
    tags: ["fiqh"],
    date: "3 March 2026",
    readTime: "4 min",
    file: "article1.html",
    excerpt: "According to the majority of scholars across the 3 madhahib, not praying due to laziness doesn't take you out of the fold of Islam — but the discussion goes deeper than that."
  },
  {
    id: 2,
    title: "Advice on Seeking Knowledge",
    subtitle: "Imam Abu Hanifah (رح)'s advice to his student Imam Abu Yusuf (رح)",
    tags: ["translations", "biography"],
    date: "3 March 2026",
    readTime: "3 min",
    file: "article2.html",
    excerpt: "\"Seek knowledge first, then gather wealth through permissible means, and then get married...\" — A translation of Imam Abu Hanifah's timeless advice."
  }
  // ── ADD NEW POSTS BELOW THIS LINE ──
  // {
  //   id: 3,
  //   title: "Your Article Title",
  //   subtitle: "A short subtitle or description",
  //   tags: ["fiqh", "hadith"],          // pick from TAGS array above, or add new ones
  //   date: "DD Month YYYY",
  //   readTime: "X min",
  //   file: "article3.html",             // filename of your new HTML file
  //   excerpt: "A one or two sentence preview shown on the blog listing page."
  // },
];
