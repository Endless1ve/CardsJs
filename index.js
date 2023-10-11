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
    console.log(submitButton)
    console.log(nameInput.value)
    if(nameInput.value.length === 0 || linkInput.value.length === 0) {
      submitButton.setAttribute('disabled', true);
      submitButton.classList.remove('popupButton-active');
    } else {
      submitButton.removeAttribute('disabled');
      submitButton.classList.add('popupButton-active');  
    }
  }


  openPopupButton.addEventListener('click', openPopup);