"use strict";
// Create a Promise that resolves after a certain delay
const delay = (ms) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            resolve('Promise resolved successfully!');
        }
        else {
            reject('Promise rejected!');
        }
    }, ms);
});
// Use .then() and .catch() to handle Promise resolution and rejection
delay(2000)
    .then((result) => {
    console.log(result); // Handle resolved Promise
})
    .catch((error) => {
    console.error(error); // Handle rejected Promise
});
