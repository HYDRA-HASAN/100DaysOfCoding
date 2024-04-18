"use strict";
// Define a function that returns a promise which resolves after a given delay
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
// Create an array of promises with different delays
const promises = [
    delay(1000), // Resolves after 1 second
    delay(2000), // Resolves after 2 seconds
    delay(3000) // Resolves after 3 seconds
];
// Use Promise.all() to wait for all promises to resolve
Promise.all(promises)
    .then(() => {
    console.log("All promises resolved successfully.");
})
    .catch((error) => {
    console.error("One of the promises was rejected:", error);
});
