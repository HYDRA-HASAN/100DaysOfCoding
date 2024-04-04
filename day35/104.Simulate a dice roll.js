"use strict";
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
const diceRoll = rollDice();
console.log(diceRoll);
