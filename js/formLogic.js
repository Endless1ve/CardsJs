import { addCardForm, submitButton } from "./variables.js";

function formValidation() {
    const nameInput = addCardForm.elements.name;
    const linkInput = addCardForm.elements.link;
    if (nameInput.value.length === 0 || linkInput.value.length === 0) {
        submitButton.setAttribute('disabled', true);
        submitButton.classList.remove('popupButton-active');
    } else {
        submitButton.removeAttribute('disabled');
        submitButton.classList.add('popupButton-active');
    }
}

export { formValidation }