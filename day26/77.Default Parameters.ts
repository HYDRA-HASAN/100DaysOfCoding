function greetUser(name: string = "Anonymous") {
    console.log(`Hello, ${name}!`);
}

greetUser(); // Output: Hello, Anonymous!
greetUser("John"); // Output: Hello, John!