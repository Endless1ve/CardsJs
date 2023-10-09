// popup variables
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profileButton');
const closePopupButton = document.querySelector('.popupClose');

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
function cardsInteractions () {
    function likeCard(event) {
        if(event.target.classList.contains('cardLike')) {
            event.target.classList.toggle('cardLike-active');
        }
    }
    function deleteCard(event) {
        cardsContainer.removeChild(event.target.closest('.card'))
    }
    return {likeCard, deleteCard};
}

const cardInteraction = cardsInteractions();


//card event
cardsContainer.addEventListener('click', cardInteraction.likeCard);
cardsContainer.addEventListener('click', cardInteraction.deleteCard);

//popup functions
function openPopup() {
    popup.classList.add('popup-active');
    closePopupButton.addEventListener('click', closePopup);
}

function closePopup() {
    popup.classList.remove('popup-active');
    closePopupButton.removeEventListener('click', closePopup);
}

//popup event 
openPopupButton.addEventListener('click', openPopup);
