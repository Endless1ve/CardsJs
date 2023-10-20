import { clearButton, cardsBlock, addCardForm, openPopupButton } from "./js/variables.js";
import { openPopup } from "./js/popupLogic.js";
import { renderLocalCards, clearLocalStorage } from "./js/localStorageLogic.js";
import { renderCard, likeCard, deleteCard } from "./js/cardLogic.js";

renderLocalCards();
clearButton.addEventListener('click', clearLocalStorage);
cardsBlock.addEventListener('click', likeCard);
cardsBlock.addEventListener('click', deleteCard);
addCardForm.addEventListener('submit', renderCard);
openPopupButton.addEventListener('click', openPopup);
