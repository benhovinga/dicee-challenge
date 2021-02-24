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
