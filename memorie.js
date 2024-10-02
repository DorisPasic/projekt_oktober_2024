const readlineSync = require('readline-sync');

// später die Buchstaben evtl. durch bilder ersetzen
const readline = require('readline');

const cards = [
  { name: 'A' },
  { name: 'B' },
  { name: 'C' },
  { name: 'D' },
  { name: 'E' },
  { name: 'F' },
  { name: 'G' },
  { name: 'A' }
];

function checkCardMatch(card1, card2) {
  if (card1.name === card2.name) {
    console.log(`Karte ${card1.name} und Karte ${card2.name} passen`);
  } else {
    console.log(`Karte ${card1.name} und Karte ${card2.name} passen nicht`);
  }
}

console.log("Wählen Sie zwei Karten aus:");
for (let i = 0; i < cards.length; i++) {
  console.log(`${i + 1}. Karte ${cards[i].name}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Bitte wählen Sie die erste Karte (1-8): ', (answer1) => {
  const card1Index = parseInt(answer1) - 1;
  const card1 = cards[card1Index];

  rl.question('Bitte wählen Sie die zweite Karte (1-8): ', (answer2) => {
    const card2Index = parseInt(answer2) - 1;
    const card2 = cards[card2Index];

    checkCardMatch(card1, card2);

    rl.close();
  });
});