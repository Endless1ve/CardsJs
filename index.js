const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popupClose');
const openPopupButton = document.querySelector('.profileButton')
const addCardForm = document.forms.newCard;
const submitButton = addCardForm.elements.submit;


function closePopup() {
    popup.classList.remove('popup-active');
    closePopupButton.removeEventListener('click', closePopup);
    addCardForm.removeEventListener('input', formValidation);
  }
  function openPopup() {
    popup.classList.add('popup-active');
    closePopupButton.addEventListener('click', closePopup);
    addCardForm.addEventListener('input', formValidation);
  }

  function formValidation() {
    const nameInput = addCardForm.elements.name;
    const linkInput = addCardForm.elements.link;
    if(nameInput.value.length === 0 || linkInput.value.length === 0) {
        
    }
  }


  openPopupButton.addEventListener('click', openPopup);