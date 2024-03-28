function convertToUpperCaseAndLowerCase(str: string) {
    const upperCaseStr = str.toUpperCase();
    const lowerCaseStr = str.toLowerCase();

    console.log("Uppercase:", upperCaseStr);
    console.log("Lowercase:", lowerCaseStr);
}

// Example usage:
const inputString = "Hassan, Yaseen";
convertToUpperCaseAndLowerCase(inputString);