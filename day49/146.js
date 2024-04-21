"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterNumbers(array, callback) {
    return array.filter(callback);
}
function isEven(num) {
    return num % 2 === 0;
}
const evenNumbers = filterNumbers(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
