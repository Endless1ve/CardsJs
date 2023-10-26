import { cardsBlock } from "./variables.js";
import { addCard, renderPlug } from "./cardLogic.js";

function addNewLocalCard(name, link, id) {
    const localArr = Array.from(JSON.parse(localStorage.cards));
    const isLiked = false;
    const newCard = { name, link, id, isLiked };
    localArr.push(newCard);
    localStorage.setItem('cards', JSON.stringify(localArr));
}

function renderLocalCards() {

    if (!localStorage.cards) {
        localStorage.setItem('cards', JSON.stringify([]));
    }
    renderPlug();

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


export { addNewLocalCard, renderLocalCards }; 