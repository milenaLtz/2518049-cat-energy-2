const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__toggle-nav');
const headerWrapper = document.querySelector('.main-header__wrapper');
const logo = document.querySelector('.main-header__logo');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-header__toggle-nav--nojs');
headerWrapper.classList.remove('main-header__wrapper--nojs');
logo.classList.remove('main-header__logo--nojs');
navMain.classList.remove('main-nav--open');
navMain.classList.add('main-nav--closed');
navToggle.classList.remove('main-header__toggle-nav--open');
navToggle.classList.add('main-header__toggle-nav--close');


navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--open')) {
    navMain.classList.remove('main-nav--open');
    navMain.classList.add('main-nav--closed');
    navToggle.classList.remove('main-header__toggle-nav--open');
    navToggle.classList.add('main-header__toggle-nav--close');
  } else {
    navMain.classList.add('main-nav--open');
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.add('main-header__toggle-nav--open');
    navToggle.classList.remove('main-header__toggle-nav--close');
  }
});
