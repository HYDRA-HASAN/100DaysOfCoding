function isValueNaN(value: any): boolean {
    return isNaN(value);
}

// Example usage
const num1 = 10;
const num2 = NaN;

console.log(isValueNaN(num1)); // Output: false
console.log(isValueNaN(num2)); // Output: true