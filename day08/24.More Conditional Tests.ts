// Tests for equality and inequality with strings
let str1: string = "hello";
let str2: string = "world";

console.log("str1 === str2", str1 === str2 ? "I predict False." : "I predict True."); // False
console.log("str1 !== str2", str1 !== str2 ? "I predict True." : "I predict False."); // True

// Tests using the lower case function
let mixedCase: string = "HeLLo";
console.log("mixedCase.toLowerCase() === hello", mixedCase.toLowerCase() === "hello" ? "I predict True." : "I predict False."); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 5;

console.log("num1 === num2", num1 === num2 ? "I predict False." : "I predict True."); // False
console.log("num1 !== num2", num1 !== num2 ? "I predict True." : "I predict False."); // True
console.log("num1 > num2", num1 > num2 ? "I predict True." : "I predict False."); // True
console.log("num1 < num2", num1 < num2 ? "I predict True." : "I predict False."); // False
console.log("num1 >= num2", num1 >= num2 ? "I predict True." : "I predict False."); // True
console.log("num1 <= num2", num1 <= num2 ? "I predict True." : "I predict False."); // False

// Tests using "and" and "or" operators
let condition1: boolean = true;
let condition2: boolean = false;

console.log("condition1 && condition2", condition1 && condition2 ? "I predict True." : "I predict False."); // False
console.log("condition1 || condition2", condition1 || condition2 ? "I predict True." : "I predict False."); // True

// Test whether an item is in an array
let array: number[] = [1, 2, 3, 4, 5];

console.log("3 is in array", array.includes(3) ? "I predict True." : "I predict False."); // True

// Test whether an item is not in an array
console.log("6 is not in array", !array.includes(6) ? "I predict True." : "I predict False."); // True
