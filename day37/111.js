"use strict";
function categorizeAge(age) {
    if (age < 13) {
        return "Child";
    }
    else if (age >= 13 && age < 18) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
const age = 25;
const ageGroup = categorizeAge(age);
console.log(`The person is an ${ageGroup}.`);
