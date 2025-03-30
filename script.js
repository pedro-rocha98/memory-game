const symbols = ["🍎", "🍌", "🍒", "🍇", "🍉", "🍓", "🥝", "🍍"];
let cards = [...symbols, ...symbols];
let selectedCards = [];
let matchedCards = [];

shuffle(cards);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

const gameBoard = document.getElementById("gameBoard");
cards.forEach(symbol => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.onclick = flipCard;
    gameBoard.appendChild(card);
});

function flipCard() {
    if (selectedCards.length < 2 && !this.classList.contains("flipped")) {
        this.classList.add("flipped");
        this.textContent = this.dataset.symbol;
        selectedCards.push(this);
    }

    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (selectedCards[0].dataset.symbol === selectedCards[1].dataset.symbol) {
        matchedCards.push(...selectedCards);
    } else {
        selectedCards.forEach(card => {
            card.classList.remove("flipped");
            card.textContent = "";
        });
    }
    selectedCards = [];

    if (matchedCards.length === cards.length) {
        alert("Congrats! You WON");
    }
}
