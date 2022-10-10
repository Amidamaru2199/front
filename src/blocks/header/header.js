const popupOpenButton = document.querySelector(".header__link-popup");
const popupCloseButton = document.querySelector(".header__popup-close");

const headerPopup = document.querySelector(".header__popup")

popupOpenButton.addEventListener('click', function () {
    headerPopup.classList.remove('is-open')
})

popupCloseButton.addEventListener('click', function () {
    headerPopup.classList.add('is-open')
})