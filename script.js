
const menuButton = document.querySelector('.mobile-menu');
const nav = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const open =
    menuButton.getAttribute('aria-expanded') !== 'true';

  menuButton.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}
