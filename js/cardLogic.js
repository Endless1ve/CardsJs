import { cardsBlock, addCardForm, plug } from "./variables.js";
import { addNewLocalCard } from "./localStorageLogic.js";
import { formValidation } from "./formLogic.js";
import { closeCardPopup } from "./popupLogic.js";

function addCard(name, link, id) {
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
    renderPlug();
    addCardForm.reset();
    formValidation();
    closeCardPopup();
}

function deleteCard(event) {
    const cards = Array.from(JSON.parse(localStorage.cards));
    if (event.target.classList.contains('cardDeleteButton')) {
        const card = event.target.closest('.card');
        const filtered = cards.filter(item => item.id !== card.id);
        localStorage.setItem('cards', JSON.stringify(filtered));
        cardsBlock.removeChild(card);
        renderPlug();
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

function renderPlug() {
    const cards = Array.from(JSON.parse(localStorage.cards));
    if (cards.length < 1) {
        plug.classList.add('noCards-active');
    }
    else plug.classList.remove('noCards-active');
}

function deleteAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => cardsBlock.removeChild(card));
    localStorage.setItem('cards', JSON.stringify([])); 
    renderPlug();
}
export { addCard, renderCard, deleteCard, likeCard, renderPlug, deleteAllCards }