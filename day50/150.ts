// Synchronous function
function synchronousFunction() {
    console.log("Synchronous code starts.");
    console.log("Synchronous code continues...");
    console.log("Synchronous code ends.");
}

// Asynchronous function
function asynchronousFunction(callback: () => void) {
    console.log("Asynchronous code starts.");
    setTimeout(() => {
        console.log("Async operation completed.");
        callback(); // Callback function to be executed after async operation
    }, 2000); // Simulating a delay of 2 seconds
}

console.log("Before calling synchronous function.");
synchronousFunction();
console.log("After calling synchronous function.");

console.log("Before calling asynchronous function.");
asynchronousFunction(() => {
    console.log("Callback executed.");
});
console.log("After calling asynchronous function.");