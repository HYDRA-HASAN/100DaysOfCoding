"use strict";
function performAsyncOperation(callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const error = null; // Set to an error object if an error occurs
        const result = "Operation completed successfully"; // Set the result of the operation
        if (error) {
            callback(error);
        }
        else {
            callback(null, result);
        }
    }, 2000);
}
// Invoking the asynchronous operation
performAsyncOperation((error, result) => {
    if (error) {
        console.error("Error occurred:", error);
        // Handle the error
    }
    else {
        console.log("Operation result:", result);
        // Handle the result
    }
});
