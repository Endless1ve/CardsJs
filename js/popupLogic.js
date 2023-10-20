import { popup, closePopupButton, addCardForm } from "./variables.js";
import { formValidation } from "./formLogic.js";

function closePopup() {
    popup.classList.remove('popup-active');
    closePopupButton.removeEventListener('click', closePopup);
    addCardForm.removeEventListener('input', formValidation);
    document.removeEventListener('keydown', closePopup);
}

function openPopup() {
    popup.classList.add('popup-active');
    closePopupButton.addEventListener('click', closePopup);
    addCardForm.addEventListener('input', formValidation);
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            closePopup();
        }
    });
}

export { closePopup, openPopup };