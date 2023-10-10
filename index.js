// popup variables
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profileButton');
const closePopupButton = document.querySelector('.popupClose');

//form variables
const form = document.forms.newCard;
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
const userCards = [];



//cards functions
function createCard(cardName, cardLink) {
  const card =
    `<div class="card" id="${cardName}">
      <div class="cardImage" style='background-image: url(${cardLink})'>
        <button class="cardDeleteButton"></button>
      </div>
      <div class="cardDescription">
        <h3 class="cardName">${cardName}</h3>
        <button class="cardLike"></button>
      </div>
    </div>`;
  return card;
}

function addCard(event) {
  event.preventDefault();
  //переменные значений инпутов формы
  const name = form.elements.name.value;
  const link = form.elements.link.value;
  //вызов функции для создания карточки
  const card = createCard(name, link);
  //добавление карточки в контейнер
  cardsContainer.insertAdjacentHTML('beforeend', card);

  userCards.push({ name, link })
  setCardInStorage(userCards);
  //очистка формы после добавления карточки
  form.reset();
  //закрывает попап после добавления
  closePopup();
  //делает кнопку в форме обратно не активной
  button.classList.remove('popupButton-active');
  button.setAttribute('disabled', true);

}


//добавление карточек в локальное хранилище
function setCardInStorage(arr) {
  const userCards = JSON.stringify(arr);
  localStorage.setItem('cards', `${userCards}`);
}

//рендер карточек из локального хранилища
function renderLocalStorageCards() {
  const localCards = JSON.parse(localStorage.cards);
  for (let i = 0; i < localCards.length; i++) {
    const card = createCard(localCards[i].name, localCards[i].link);
    cardsContainer.insertAdjacentHTML('beforeend', card)
  };
}

function renderInitialCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    //создает и добавляет карточку по каждому элементу массива
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


//popup functions
function openPopup() {
  popup.classList.add('popup-active');
  closePopupButton.addEventListener('click', closePopup);
}

function closePopup() {
  popup.classList.remove('popup-active');
  closePopupButton.removeEventListener('click', closePopup);
}

renderInitialCards(initialCards);
renderLocalStorageCards()

//card events
cardsContainer.addEventListener('click', likeCard);
cardsContainer.addEventListener('click', deleteCard);


//popup event 
openPopupButton.addEventListener('click', openPopup);

//form events
form.addEventListener('submit', addCard);

form.addEventListener('input', function () {
  const name = form.elements.name;
  const link = form.elements.link;
  //проверка на заполненность инпутов для кнопки сабмита
  if (name.value.length === 0 || link.value.length === 0) {
    button.classList.remove('popupButton-active');
    button.setAttribute('disabled', true);
  } else {
    button.classList.add('popupButton-active');
    button.removeAttribute('disabled');
  }
})