import { addCardPopup, confirmPopup, cardCloseButton, closeConfirmButton, addCardForm, noButton, yesButton } from "./variables.js";
import { formValidation } from "./formLogic.js";
import { deleteAllCards } from "./cardLogic.js";

function closeCardPopup() {
    addCardPopup.classList.remove('popup-active');
    cardCloseButton.removeEventListener('click', closeCardPopup);
    addCardForm.removeEventListener('input', formValidation);
}

function openCardPopup() {
    addCardPopup.classList.add('popup-active');

    cardCloseButton.addEventListener('click', closeCardPopup);

    addCardForm.addEventListener('input', formValidation);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCardPopup();
        }
    });
}

function openConfirmPopup() {
    confirmPopup.classList.add('popup-active');

    yesButton.addEventListener('click', () => {
        deleteAllCards();
        closeConfirmPopup();
    });

    closeConfirmButton.addEventListener('click', closeConfirmPopup);

    noButton.addEventListener('click', closeConfirmPopup);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeConfirmPopup();
        }
    });
}

function closeConfirmPopup() {
    confirmPopup.classList.remove('popup-active');
    noButton.removeEventListener('click', closeConfirmPopup);
}

export { closeCardPopup, openCardPopup, openConfirmPopup, closeConfirmPopup };