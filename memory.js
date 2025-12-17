const images = [
    "images/mm_james1.jpg",
    "images/mm_james2.jpg",
    "images/mm_martin1.jpg",
    "images/mm_martin2.jpg",
    "images/mm_juhoon1.jpg",
    "images/mm_juhoon2.jpg",
    "images/mm_keonho1.jpg",
    "images/mm_keonho2.jpg",
    "images/mm_seongyeon1.jpg",
    "images/mm_seongyeon2.jpg",
    "images/mm_james1.jpg",
    "images/mm_james2.jpg",
    "images/mm_martin1.jpg",
    "images/mm_martin2.jpg",
    "images/mm_juhoon1.jpg",
    "images/mm_juhoon2.jpg",
    "images/mm_keonho1.jpg",
    "images/mm_keonho2.jpg",
    "images/mm_seongyeon1.jpg",
    "images/mm_seongyeon2.jpg"
];
let firstCard = null;
let secondCard = null;
let lockBoard = false;


const game = document.getElementById("game");

images.sort(() => 0.5 - Math.random());

images.forEach(imgSrc => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = imgSrc;

    const img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add("card-img");
    img.style.display = "none";

    card.appendChild(img);
    card.addEventListener("click", () => flipCard(card));
    game.appendChild(card);
});

function flipCard(card) {
    if (lockBoard || card === firstCard || card.classList.contains("matched")) return;

    card.classList.add("flipped");
    card.querySelector("img").style.display = "block";

    if (!firstCard) {
        firstCard = card;
        return;
    };

    secondCard = card;
    checkMatch();
};

function checkMatch() {
    const isMatch = firstCard.dataset.image === secondCard.dataset.image;

    if (isMatch) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        resetTurn();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.querySelector("img").style.display = "none";
            secondCard.querySelector("img").style.display = "none";
            resetTurn();
        }, 800);
    }
};

function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}