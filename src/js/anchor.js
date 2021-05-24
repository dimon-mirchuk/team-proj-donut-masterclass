const links = document.querySelectorAll('.mobile-menu__link');
const menu = document.querySelector('.mobile-menu');
const menuBtnRef = document.querySelector('[data-menu-button]');
links.forEach(link =>
  link.addEventListener('click', () => {
    if (menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      document.body.classList.remove('lock-scroll');
      menuBtnRef.classList.remove('is-open');
    }
  }),
);
