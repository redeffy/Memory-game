function whatsYourName() {
  let text;
  let person = prompt("Please enter your name:", "Harry Potter");
  text = person;
  document.getElementById("demo").innerHTML = text;
}

var timerElement = document.getElementById("timer");
let startTime = new Date().getTime();

var flipIndex = null;
function updateTimer() {
  var now = new Date().getTime();
  var elapsedSeconds = Math.floor((now - startTime) / 1000);
  timerElement.textContent = "Zeit: " + elapsedSeconds;
}

// Get the parent element where the cards will be appended
var parent = document.getElementById("spielbereich");

// Define an array of card images
var cardImages = [
  "card1.png",
  "card2.png",
  "card3.png",
  "card4.png",
  "card5.png",
  "card6.png",
  "card7.png",
  "card8.png",
];

// Duplicate the array to create pairs of cards
var cardPairs = cardImages.concat(cardImages);

// Shuffle the card pairs array
cardPairs.sort(() => Math.random() - 0.5);

// Create a new div element for each card and add necessary attributes
for (let i = 0; i < cardPairs.length; i++) {
  if (i === 4 || i === 8 || i === 12 || i === 16) {
    parent.appendChild(document.createElement("br"));
  }
  var card = document.createElement("div");
  card.className = "karte";
  card.id = i;
  card.addEventListener("click", function () {
    flipCard(cardPairs[i], i);
  });
  parent.appendChild(card);
}
// Function to flip the card when clicked
function flipCard(cardImage, id) {
  var card = document.getElementById(id);
  card.style.backgroundImage = `url('pics/${cardImage}')`;
  if (flipIndex === null) {
    flipIndex = id;
  } else {
    countTries();
    setTimeout(() => {
      var flippedCard = document.getElementById(flipIndex);
      if (card.style.backgroundImage === flippedCard.style.backgroundImage) {
        card.style.backgroundImage = `url('pics/memoryBgI.png')`;
        flippedCard.style.backgroundImage = `url('pics/memoryBgI.png')`;
        flipIndex = null;
      } else {
        card.style.backgroundImage = `url('pics/memoryBg.png')`;
        flippedCard.style.backgroundImage = `url('pics/memoryBg.png')`;
        flipIndex = null;
      }
    }, 1000);
  }
}
//Function to count the tries
var numTries = 0;
function countTries() {
  var tries = document.getElementById("tries");
  numTries++;
  tries.textContent = "Versuche: " + numTries;
}
