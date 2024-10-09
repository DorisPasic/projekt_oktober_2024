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
      card.classList.toggle("flipped"); 
      flippedCards.push(card);
      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
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
  }
  flippedCards = [];

  console.log(`Matched cards: ${matchedCards.length} / ${cards.length}`);

  if (matchedCards.length === cards.length) {
    console.log("All cards matched! Displaying congratulations...");
    displayCongratulations();
  }
}

function displayCongratulations() {
  console.log("Displaying congratulations...");
  const headerElement = document.querySelector("h1");
  const congratulationsMessage = document.createElement("span");
  congratulationsMessage.textContent = " Glückwunsch! Du hast das Memory Spiel gewonnen!";
  headerElement.appendChild(congratulationsMessage);
}