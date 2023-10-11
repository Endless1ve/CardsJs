const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    isLiked: false,
    id: '1'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    isLiked: false,
    id: '2'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    isLiked: false,
    id: '3'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    isLiked: false,
    id: '4'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    isLiked: false,
    id: '5'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    isLiked: false,
    id: '6'
  },
  {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg',
    isLiked: false,
    id: '7'
  },
  {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg',
    isLiked: false,
    id: '8'
  },
  {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg',
    isLiked: false,
    id: '9'
  },
  {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg',
    isLiked: false,
    id: '10'
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
function addCard(name, link, id, isLiked) {
  const card = `
  <div class="card" id="${id}">
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
  const id = Math.random().toString(16).slice(2);
  const newCard = addCard(nameInput.value, linkInput.value, id);
  addNewLocalCard(nameInput.value, linkInput.value, id);

  cardsBlock.insertAdjacentHTML('beforeend', newCard);

  addCardForm.reset();
  formValidation();
}
function addLocalCards(array) {
  if (!localStorage.cards) {
    localStorage.setItem('cards', JSON.stringify(array));
  }
}
function addNewLocalCard(name, link, id) {
  const localArr = Array.from(JSON.parse(localStorage.cards));
  const isLiked = false;
  const newCard = { name, link, id, isLiked };
  localArr.push(newCard);
  localStorage.setItem('cards', JSON.stringify(localArr));
}
function renderLocalCards() {
  addLocalCards(initialCards);
  const cards = Array.from(JSON.parse(localStorage.cards));
  for (let i = 0; i < cards.length; i++) {
    const newCard = addCard(cards[i].name, cards[i].link, cards[i].id, cards[i].isLiked);
    cardsBlock.insertAdjacentHTML('beforeend', newCard);
    if (cards[i].isLiked) {
      const card = document.getElementById(cards[i].id);
      const like = card.querySelector('.cardLike').classList.add('cardLike-active');
    }
  }
}
function deleteCard(event) {
  const cards = Array.from(JSON.parse(localStorage.cards));
  if (event.target.classList.contains('cardDeleteButton')) {
    const card = event.target.closest('.card');
    const filtered = cards.filter(item => item.id !== card.id);
    localStorage.setItem('cards', JSON.stringify(filtered));
    cardsBlock.removeChild(card);
  }
}

function likeCard(event) {
  const cards = Array.from(JSON.parse(localStorage.cards));
  if (event.target.classList.contains('cardLike')) {
    const card = event.target.closest('.card');
    event.target.classList.toggle('cardLike-active');
    cards.map(item => {
      if (item.id === card.id) {
        item.isLiked = !item.isLiked;
      }
    });
    localStorage.setItem('cards', JSON.stringify(cards));
  }
}

renderLocalCards();
cardsBlock.addEventListener('click', likeCard);
cardsBlock.addEventListener('click', deleteCard);
addCardForm.addEventListener('submit', renderCard);
openPopupButton.addEventListener('click', openPopup);
