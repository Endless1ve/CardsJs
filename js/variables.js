const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popupClose');

const openPopupButton = document.querySelector('.profileButton')
const addCardForm = document.forms.newCard;
const submitButton = addCardForm.elements.submit;
const clearButton = document.querySelector('.clearLocalButton');

const cardsBlock = document.querySelector('.cardsBlock');
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

export { popup, closePopupButton, openPopupButton, addCardForm, submitButton, clearButton, cardsBlock, initialCards };