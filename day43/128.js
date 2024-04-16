"use strict";
const multiply = (...numbers) => {
    return numbers.reduce((product, number) => product * number, 1);
};
