"use strict";
const today = new Date();
const currentYear = today.getFullYear();
const birthMonth = 9; // Replace with your birth month (0-11)
const birthDay = 15; // Replace with your birth day
let nextBirthday = new Date(currentYear, birthMonth, birthDay);
if (nextBirthday < today) {
    // If your birthday has already passed this year, calculate the next year's birthday
    nextBirthday = new Date(currentYear + 1, birthMonth, birthDay);
}
console.log(nextBirthday);
