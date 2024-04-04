function getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInt = getRandomInteger(1, 10);
console.log(randomInt);