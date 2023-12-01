import {
  confirmButton,
  cardsBlock,
  addCardForm,
  openPopupButton,
} from "./js/variables.js";
import { openCardPopup, openConfirmPopup } from "./js/popupLogic.js";
import { renderLocalCards } from "./js/localStorageLogic.js";
import { renderCard, likeCard, deleteCard } from "./js/cardLogic.js";
//рендер локальных карточек при загрузке страницы
renderLocalCards();
//открытие попапа с карточками
openPopupButton.addEventListener("click", openCardPopup);
//открытие попапа удаления карточек
confirmButton.addEventListener("click", openConfirmPopup);
//лайк и удаление карточки
cardsBlock.addEventListener("click", likeCard);
cardsBlock.addEventListener("click", deleteCard);
//рендер новой карточки
addCardForm.addEventListener("submit", renderCard);