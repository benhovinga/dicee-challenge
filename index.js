/**
 * Returns a random number between 1 and 6
 * @returns {number} Between 1 and 6
 **/
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

/**
 * Replaces the dice image in the DOM
 * @param {string} imageSelector - The DOM selector of the image to change ex. ".img1"
 * @param {number} diceRoll - The dice number to change to
 * @returns {boolean} Success state
 **/
function replaceDiceImage(imageSelector, diceRoll) {
  if (
    typeof diceRoll !== "number" ||
    diceRoll > 6 ||
    diceRoll < 1 ||
    imageSelector === null ||
    imageSelector === undefined
  ) {
    return false;
  }

  document.querySelector(imageSelector).src = "images/dice" + diceRoll + ".png";
  return true;
}

/**
 * Shows the results on the screen
 * @param {number} player1Roll
 * @param {number} player2Roll
 * @returns {boolean} Success state
 **/
function showResults(player1Roll, player2Roll) {
  let SELECTOR = "h1";

  if (typeof player1Roll !== "number" || typeof player2Roll !== "number") {
    return false;
  }

  if (player1Roll > player2Roll) {
    document.querySelector(SELECTOR).innerHTML = "Player 1 wins!";
  } else if (player1Roll < player2Roll) {
    document.querySelector(SELECTOR).innerHTML = "Player 2 wins!";
  } else {
    document.querySelector(SELECTOR).innerHTML = "Draw!";
  }
  return true;
}

function main() {
  let player1Roll = rollDice();
  let player2Roll = rollDice();

  replaceDiceImage(".img1", player1Roll);
  replaceDiceImage(".img2", player2Roll);

  showResults(player1Roll, player2Roll);
}

if (sessionStorage.getItem("is_reloaded")) {
  main();
}
sessionStorage.setItem("is_reloaded", true);
