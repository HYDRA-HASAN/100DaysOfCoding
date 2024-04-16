const multiply = (...numbers: number[]): number => {
    return numbers.reduce((product, number) => product * number, 1);
};