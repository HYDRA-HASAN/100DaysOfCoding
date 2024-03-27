"use strict";
function greetUser(name = "Anonymous") {
    console.log(`Hello, ${name}!`);
}
greetUser(); // Output: Hello, Anonymous!
greetUser("John"); // Output: Hello, John!
