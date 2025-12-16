const symbols = ['🍎','🍎','⭐','⭐','🌸','🌸','🍀','🍀','🌙','🌙','🔥','🔥','💎','💎','🎵','🎵'];
let firstCard = null;
let secondCard = null;
let lockBoard = false;


const game = document.getElementById('game');


// Shuffle cards
symbols.sort(() => 0.5 - Math.random());


// Create cards
symbols.forEach(symbol => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.symbol = symbol;
    card.textContent = '';


    card.addEventListener('click', () => flipCard(card));
    game.appendChild(card);
});

function flipCard(card) {
    if (lockBoard || card === firstCard || card.classList.contains('matched')) return;


    card.classList.add('flipped');
    card.textContent = card.dataset.symbol;


    if (!firstCard) {
        firstCard = card;
        return;
    }


    secondCard = card;
    checkMatch();
}

function checkMatch() {
    const isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;

    if (isMatch) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        resetTurn();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';
            resetTurn();
        }, 800);
    }
}


function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}