const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.isClicked = false;
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
let countNumber = 0;
let flippedCard;
let score = 0;
function handleCardClick(event) {
//  find not clicked card
  let div = event.target;
  if (!div.isClicked) {
    if (countNumber === 0) {
      countNumber += 1;
      score += 1;
      div.style.backgroundColor = div.className;
      div.isClicked = true;
      flappedCard = div;
    } else {
      countNumber = 0;
      score += 1;
      div.style.backgroundColor = div.className;
      if (div.className !== flappedCard.className) {
        setTimeout( function() {
          score -= 2;
          flappedCard.style.backgroundColor = "";
          div.style.backgroundColor = "";
          flappedCard.isClicked = false;
          div.isClicked = false;
        }, 1000);
      } else if (div.className == flappedCard.className) {
        div.isClicked = true;
      }
    }


    setTimeout( function() {
      if (score === COLORS.length) {
        const popUp = document.getElementById("myPopup");
        popUp.textContent= "Well Done!";
      }
    }, 300);

  }

}



// when the DOM loads
createDivsForColors(shuffledColors);