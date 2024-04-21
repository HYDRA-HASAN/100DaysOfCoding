"use strict";
// Example function to simulate asynchronous behavior
function simulateAsyncOperation(callback) {
    setTimeout(() => {
        console.log("Async operation completed.");
        callback(); // Callback function to be executed after async operation
    }, 2000); // Simulating a delay of 2 seconds
}
console.log("Start");
// Calling the asynchronous function
simulateAsyncOperation(() => {
    console.log("Callback executed.");
});
console.log("End");
