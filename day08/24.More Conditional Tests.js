"use strict";
// Tests for equality and inequality with strings
let str1 = "hello";
let str2 = "world";
console.log("str1 === str2", str1 === str2 ? "I predict False." : "I predict True."); // False
console.log("str1 !== str2", str1 !== str2 ? "I predict True." : "I predict False."); // True
// Tests using the lower case function
let mixedCase = "HeLLo";
console.log("mixedCase.toLowerCase() === hello", mixedCase.toLowerCase() === "hello" ? "I predict True." : "I predict False."); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 5;
console.log("num1 === num2", num1 === num2 ? "I predict False." : "I predict True."); // False
console.log("num1 !== num2", num1 !== num2 ? "I predict True." : "I predict False."); // True
console.log("num1 > num2", num1 > num2 ? "I predict True." : "I predict False."); // True
console.log("num1 < num2", num1 < num2 ? "I predict True." : "I predict False."); // False
console.log("num1 >= num2", num1 >= num2 ? "I predict True." : "I predict False."); // True
console.log("num1 <= num2", num1 <= num2 ? "I predict True." : "I predict False."); // False
// Tests using "and" and "or" operators
let condition1 = true;
let condition2 = false;
console.log("condition1 && condition2", condition1 && condition2 ? "I predict True." : "I predict False."); // False
console.log("condition1 || condition2", condition1 || condition2 ? "I predict True." : "I predict False."); // True
// Test whether an item is in an array
let array = [1, 2, 3, 4, 5];
console.log("3 is in array", array.includes(3) ? "I predict True." : "I predict False."); // True
// Test whether an item is not in an array
console.log("6 is not in array", !array.includes(6) ? "I predict True." : "I predict False."); // True
