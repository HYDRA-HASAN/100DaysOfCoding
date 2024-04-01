"use strict";
const fruits = ["Apple", "Banana", "Orange", "Grapes"];
const bananaIndex = fruits.indexOf("Banana");
if (bananaIndex !== -1) {
    fruits[bananaIndex] = "Mango";
}
console.log(fruits);
