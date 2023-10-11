const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    likes: 0
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    likes: 0
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    likes: 0
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    likes: 0
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    likes: 0
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    likes: 0
  },
  {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg',
    likes: 0
  },
  {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg',
    likes: 0
  },
  {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg',
    likes: 0
  },
  {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg',
    likes: 0
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
  addNewLocalCard(nameInput.value, linkInput.value);
  cardsBlock.insertAdjacentHTML('beforeend', newCard);
  addCardForm.reset();
  formValidation();
  return { nameInput, linkInput };
}
function addLocalCards(array) {
  if (!localStorage.cards) {
    localStorage.setItem('cards', JSON.stringify(array));
  }
}
function addNewLocalCard(name, link) {
  const localArr = Array.from(JSON.parse(localStorage.cards));
  const newCard = { name, link };
  localArr.push(newCard);
  localStorage.setItem('cards', JSON.stringify(localArr));
  console.log(JSON.parse(localStorage.cards))

}

function renderLocalCards() {
  addLocalCards(initialCards);
  const cards = Array.from(JSON.parse(localStorage.cards));
  for (let i = 0; i < cards.length; i++) {
    const newCard = addCard(cards[i].name, cards[i].link);
    cardsBlock.insertAdjacentHTML('beforeend', newCard);
  }
  console.log(cards)
}

renderLocalCards();
addCardForm.addEventListener('submit', renderCard);
openPopupButton.addEventListener('click', openPopup);