const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
  },
  {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
  },
  {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
  },
  {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
  }
];

const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popupClose');
const openPopupButton = document.querySelector('.profileButton')
const addCardForm = document.forms.newCard;
const submitButton = addCardForm.elements.submit;

const cardsBlock = document.querySelector('.cardsBlock');


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
  if (nameInput.value.length === 0 || linkInput.value.length === 0) {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.remove('popupButton-active');
  } else {
    submitButton.removeAttribute('disabled');
    submitButton.classList.add('popupButton-active');
  }
}

function addCard(name, link) {
  const card = `
  <div class="card">
    <div class="cardImage" style="background-image: url('${link}')">
      <img src="./images/trash-icon.svg" alt="Кнопка удаления" class="cardDeleteButton">
    </div>
    <div class="cardDescription">
      <p class="cardName">${name}</p>
      <button class="cardLike"></button>
    </div>
  </div>`;
  return card;
}

function renderCard(event) {
  event.preventDefault();
  const nameInput = addCardForm.elements.name;
  const linkInput = addCardForm.elements.link;
  const newCard = addCard(nameInput.value, linkInput.value);
  cardsBlock.insertAdjacentHTML('beforeend', newCard);
  addCardForm.reset();
  formValidation();
}

addCardForm.addEventListener('submit', renderCard);

console.log(localStorage)
openPopupButton.addEventListener('click', openPopup);