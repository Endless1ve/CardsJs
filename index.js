// popup variables
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profileButton');
const closePopupButton = document.querySelector('.popupClose');
//form variables
const form = document.forms.newCard;
const name = form.elements.name;
const link = form.elements.link;
const button = form.elements.submit;
//cardsVariables
const cardsContainer = document.querySelector('.cardsBlock');
const likeButton = document.querySelectorAll('.cardLike');
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


//cards functions
function createCard(name, link) {
  const card =
      `<div class="card">
      <div class="cardImage" style='background-image: url(${link})'>
        <button class="cardDeleteButton"></button>
      </div>
      <div class="cardDescription">
        <h3 class="cardName">${name}</h3>
        <button class="cardLike"></button>
      </div>
    </div>`;
    console.log(card);
    return card;
}

function addCard(event) {
  event.preventDefault();
  const card = createCard(name.value, link.value);
  cardsContainer.insertAdjacentHTML('beforeend', card)
  form.reset();
  button.classList.remove('popupButton-active');
  button.setAttribute('disabled', true);
}

function renderInitialCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    const card = createCard(arr[i].name, arr[i].link);
    cardsContainer.insertAdjacentHTML('beforeend', card)
  }
}
function likeCard(event) {
  if (event.target.classList.contains('cardLike')) {
    event.target.classList.toggle('cardLike-active');
  }
}
function deleteCard(event) {
  if (event.target.classList.contains('cardDeleteButton')) {
    cardsContainer.removeChild(event.target.closest('.card'))
  }
}

renderInitialCards(initialCards);


//popup functions
function openPopup() {
  popup.classList.add('popup-active');
  closePopupButton.addEventListener('click', closePopup);
}

function closePopup() {
  popup.classList.remove('popup-active');
  closePopupButton.removeEventListener('click', closePopup);
}

//card event
cardsContainer.addEventListener('click', likeCard);
cardsContainer.addEventListener('click', deleteCard);


//popup event 
openPopupButton.addEventListener('click', openPopup);

//form event
form.addEventListener('submit', addCard);

form.addEventListener('input', function () {
  if (name.value.length === 0 || link.value.length === 0) {
    button.classList.remove('popupButton-active');
    button.setAttribute('disabled', true);
  } else {
    button.classList.add('popupButton-active');
    button.removeAttribute('disabled');
  }
})
