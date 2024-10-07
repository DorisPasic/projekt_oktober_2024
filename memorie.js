let cards = document.querySelectorAll(".card");
let flippedCards = [];
let matchedCards = [];


cards.forEach((card, index) => {
  card.style.order = Math.floor(Math.random() * cards.length);
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(card) &&
      !matchedCards.includes(card)
    ) {
      card.classList.add("flipped");
      flippedCards.push(card);
      card.innerHTML = `<span>${card.dataset.card}</span>`; 
      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 5000);
      }
    }
  });
});

function checkMatch() {
  if (flippedCards[0].dataset.card === flippedCards[1].dataset.card) {
    matchedCards.push(flippedCards[0]);
    matchedCards.push(flippedCards[1]);
    flippedCards[0].classList.add("matched");
    flippedCards[1].classList.add("matched");
  } else {
    flippedCards[0].classList.remove("flipped");
    flippedCards[1].classList.remove("flipped");
    flippedCards[0].innerText = ""; 
    flippedCards[1].innerText = ""; 
  }
  flippedCards = [];
}

