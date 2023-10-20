import { initialCards, cardsBlock } from "./variables.js";
import { addCard } from "./cardLogic.js";
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
            card.querySelector('.cardLike').classList.add('cardLike-active');
        }
    }
}


function clearLocalStorage() {
    localStorage.clear();
    location.reload();
}

export { addNewLocalCard, renderLocalCards, clearLocalStorage }; 