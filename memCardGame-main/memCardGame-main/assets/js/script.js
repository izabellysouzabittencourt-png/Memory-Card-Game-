const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++;
        if(matched == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [
    "assets/img/Lan zhan x Wei Wuxian uwu.jpg",
    "assets/img/Mdzs.jpg",
    "assets/img/Skk.jpg",
    "assets/img/transferir (2).jpg",
    "assets/img/transferir (3).jpg",
    "assets/img/transferir (5).jpg",
    "assets/img/wangxian peppa pig ★.jpg",
    "assets/img/Мем мдк.jpg",

    "assets/img/Lan zhan x Wei Wuxian uwu.jpg",
    "assets/img/Mdzs.jpg",
    "assets/img/Skk.jpg",
    "assets/img/transferir (2).jpg",
    "assets/img/transferir (3).jpg",
    "assets/img/transferir (5).jpg",
    "assets/img/wangxian peppa pig ★.jpg",
    "assets/img/Мем мдк.jpg"
    ];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = imgTag.src = arr[i];
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});