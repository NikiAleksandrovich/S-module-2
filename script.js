const toggleButton = document.querySelector('.page-header__toggle');
const toggleButtonClos = document.querySelector('.main-nav__toggle');
const pageWrapper = document.querySelector('.page__wrapper');
toggleButton.addEventListener('click', function () {
  pageWrapper.classList.toggle('page__wrapper--opened');
  pageWrapper.classList.toggle('page__wrapper--closed');
});
toggleButtonClos.addEventListener('click', function () {
  pageWrapper.classList.toggle('page__wrapper--opened');
  pageWrapper.classList.toggle('page__wrapper--closed');
});
