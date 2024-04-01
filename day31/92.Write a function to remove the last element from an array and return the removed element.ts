function removeLastElement(arr: any[]): any {
    return arr.pop();
}

const fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']