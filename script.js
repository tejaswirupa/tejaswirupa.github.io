
/* Mobile navigation */

const menuButton = document.querySelector(".mobile-menu");
const nav = document.querySelector("#main-nav");

menuButton?.addEventListener("click", () => {
  const open =
    menuButton.getAttribute("aria-expanded") !== "true";

  menuButton.setAttribute("aria-expanded", String(open));
  nav?.classList.toggle("open", open);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

/* Portfolio-wide clean navigation links */

/*
  All HTML pages and script.js are currently stored
  at the repository root.
*/

const scriptElement = document.querySelector(
  'script[src$="script.js"]'
);

const siteRoot = scriptElement
  ? new URL("./", scriptElement.src)
  : new URL("./", window.location.href);

const routes = {
  "index.html": "",
  "experience.html": "experience",
  "projects.html": "projects",
  "about.html": "about",
  "contact.html": "contact",
  "experience": "experience",
  "projects": "projects",
  "about": "about",
  "contact": "contact"
};

document.querySelectorAll("a[href]").forEach((link) => {
  const href = link.getAttribute("href");

  if (Object.prototype.hasOwnProperty.call(routes, href)) {
    link.href = new URL(routes[href], siteRoot).href;
  }

  if (href === "./") {
    link.href = siteRoot.href;
  }
});

/* Resolve image paths from the repository root */

document.querySelectorAll("img[src]").forEach((image) => {
  const src = image.getAttribute("src");

  if (src.startsWith("assets/") ||
      src.startsWith("./assets/")) {
    image.src = new URL(
      src.replace(/^\.\//, ""),
      siteRoot
    ).href;
  }
});

/* Copyright year */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
