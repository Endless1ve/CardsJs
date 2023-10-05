// popup variables
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profileButton');
const closePopupButton = document.querySelector('.popupClose');

//popup functions
function openPopup() {
    popup.classList.add('popup-active');
    closePopupButton.addEventListener('click', closePopup);
}

function closePopup() {
    popup.classList.remove('popup-active');
    closePopupButton.removeEventListener('click', closePopup);
}

//popup event 
openPopupButton.addEventListener('click', openPopup);