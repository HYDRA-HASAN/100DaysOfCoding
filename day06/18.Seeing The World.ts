let places: Array<string> = ["USA", "Canada", "England"];

console.log("Original order: " + places[0] + ', ' + places[1] + ', ' + places[2]); // Original order

console.log("Alphabetical order: " + places[1] + ', ' + places[2] + ', ' + places[0]); // Alphabetical order

console.log("Array is still in original order: " + places[0] + ', ' + places[1] + ', ' + places[2]); // Original order

console.log("Reverse order: " + places[2] + ', ' + places[1] + ', ' + places[0]); // Reverse order

console.log("Array is still in original order: " + places[0] + ', ' + places[1] + ', ' + places[2]); // Original order

places.reverse(); // Reverse the order of the original array
console.log("Reversed array: " + places[0] + ', ' + places[1] + ', ' + places[2]); // Reversed order

places.reverse(); // Reverse the order again to restore original order
console.log("Array restored to original order: " + places[0] + ', ' + places[1] + ', ' + places[2]); // Original order restored

places.sort(); // Sort the array alphabetically
console.log("Sorted array: " + places[0] + ', ' + places[1] + ', ' + places[2]); // Sorted order

places.sort(); // Sort the array in reverse alphabetical order
console.log("Reverse sorted array: " + places[2] + ', ' + places[1] + ', ' + places[0]); // Reverse sorted order
