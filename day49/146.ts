const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterNumbers(array: number[], callback: (num: number) => boolean): number[] {
    return array.filter(callback);
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

const evenNumbers = filterNumbers(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]