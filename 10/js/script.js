let headerMain = document.querySelector('.main-header__wrapper');

headerMain.classList.remove('main-header__wrapper--nojs');

let navMain = document.querySelector('.main-nav');
let headerToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-nav--nojs');

headerToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerToggle.classList.remove('main-header__toggle--closed');
    headerToggle.classList.add('main-header__toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerToggle.classList.add('main-header__toggle--closed');
    headerToggle.classList.remove('main-header__toggle--opened');
  }
});
