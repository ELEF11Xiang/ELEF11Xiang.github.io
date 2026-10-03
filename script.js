const translations = {
  zh: {
    "nav.home": "首页", "nav.about": "关于我", "nav.archive": "图像档案", "nav.notes": "随笔",
    "home.eyebrow": "上海 · 25级德语系", "home.titleOne": "你好，", "home.titleTwo": "我是相依依。",
    "home.intro": "喜欢看现场，也喜欢织毛线、听音乐。<br />在阅读、写字和游戏之间，慢慢找到自己的节奏。", "home.cta": "认识我", "home.secondary": "看我的收藏", "home.footer": "一个正在长大的人的小小角落",
    "about.eyebrow": "About me / 关于我", "about.title": "把好奇心<br /><em>变成方向。</em>", "about.quote": "在很多事情同时发生的时候，愿意把脚下的每一步走清楚，也希望自己少焦虑一点。",
    "about.nameLabel": "姓名", "about.name": "相依依", "about.schoolLabel": "身份", "about.school": "上海交通大学 · 25级德语系本科生", "about.interestLabel": "兴趣", "about.interest": "看现场 / 织毛线 / 听音乐 / 阅读 / 写字 / 打游戏", "about.focusLabel": "正在处理", "about.bottom": "在大创、艺术中心招新和个人规划之间，慢慢找到方向。",
    "archive.eyebrow": "Selected archive / 图片集", "archive.title": "把生活<br /><em>一张张留下来。</em>", "archive.aside": "个人生活、看现场和一些被保存下来的瞬间。",
    "notes.eyebrow": "Notebook / 随笔", "notes.title": "写给正在<br /><em>路上的自己。</em>", "notes.featureTitle": "在很多事情之间，找到自己的节奏", "notes.featureBody": "大创、招新和未来规划一起到来的时候，焦虑也会跟着出现。那就先做眼前的事：去看一场现场，织几行毛线，读一点书，写几个字，再慢慢想清楚下一步。", "notes.readMore": "继续记录 ↗", "notes.noteTwo": "把焦虑拆成今天能做的事", "notes.noteThree": "在现场重新获得能量", "notes.noteFour": "关于未来规划的暂时答案", "notes.footer": "每一次记录，都是和自己打个照面。"
  },
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.archive": "Archive", "nav.notes": "Notes",
    "home.eyebrow": "Shanghai · German studies '25", "home.titleOne": "Hello,", "home.titleTwo": "I'm Yiyi Xiang.",
    "home.intro": "I like live events, knitting, and music.<br />Between reading, writing, and games, I am finding my own rhythm.", "home.cta": "Meet me", "home.secondary": "See my archive", "home.footer": "A small corner of someone still growing",
    "about.eyebrow": "About me / 关于我", "about.title": "Turning curiosity<br /><em>into direction.</em>", "about.quote": "When many things arrive at once, I want to take one clear step at a time, and worry a little less.",
    "about.nameLabel": "Name", "about.name": "Yiyi Xiang", "about.schoolLabel": "Currently", "about.school": "Shanghai Jiao Tong University · German Studies, Class of 2025", "about.interestLabel": "Interests", "about.interest": "Live events / knitting / music / reading / writing / games", "about.focusLabel": "Working on", "about.bottom": "Finding direction between research, arts programming, and the future.",
    "archive.eyebrow": "Selected archive / 图片集", "archive.title": "Keeping life<br /><em>one image at a time.</em>", "archive.aside": "Personal life, live events, and moments worth keeping.",
    "notes.eyebrow": "Notebook / 随笔", "notes.title": "For the self<br /><em>still on the way.</em>", "notes.featureTitle": "Finding a rhythm among many things", "notes.featureBody": "When research, recruitment, and future plans arrive together, anxiety follows. So I start with what is in front of me: see a live event, knit a few rows, read a little, write a few lines, and let the next step become clearer.", "notes.readMore": "Keep writing ↗", "notes.noteTwo": "Breaking anxiety into today's tasks", "notes.noteThree": "Finding energy at a live event", "notes.noteFour": "A temporary answer about the future", "notes.footer": "Every note is a brief meeting with myself."
  }
};

const pages = [...document.querySelectorAll("[data-page]")];
const navLinks = [...document.querySelectorAll("[data-page-link]")];
let language = "zh";

function applyLanguage() {
  document.body.classList.toggle("en", language === "en");
  document.documentElement.lang = language === "en" ? "en" : "zh-CN";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = translations[language][node.dataset.i18n];
    if (value) node.innerHTML = value;
  });
}

function showPage(pageName) {
  const nextPage = document.querySelector(`[data-page="${pageName}"]`) || document.querySelector('[data-page="home"]');
  pages.forEach((page) => page.classList.toggle("active-page", page === nextPage));
  navLinks.forEach((link) => link.classList.toggle("active", link.dataset.pageLink === nextPage.dataset.page));
  nextPage.querySelectorAll(".reveal").forEach((node) => {
    node.style.animation = "none";
    node.offsetHeight;
    node.style.animation = "";
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelector("[data-language-toggle]").addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  applyLanguage();
});

window.addEventListener("hashchange", () => showPage(window.location.hash.slice(1) || "home"));
applyLanguage();
showPage(window.location.hash.slice(1) || "home");
