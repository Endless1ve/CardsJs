//попап добавления карточек
const addCardPopup = document.querySelector('.addCard');
const cardCloseButton = document.querySelector('.cardClose');
const openPopupButton = document.querySelector('.profileButton');
const addCardForm = document.forms.newCard;
const submitButton = addCardForm.elements.submit;
//попап удаления карточек
const confirmPopup = document.querySelector('.confirmPopup');
const closeConfirmButton = document.querySelector('.confirmClose');
const confirmButton = document.querySelector('.clearLocalButton');
const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');
//блок карточек
const cardsBlock = document.querySelector('.cardsBlock');
//заглушка при отсутствии карточек
const plug = document.querySelector('.noCards');

export { addCardPopup, cardCloseButton, openPopupButton, addCardForm, submitButton, confirmButton, cardsBlock, plug, confirmPopup, closeConfirmButton, yesButton, noButton };