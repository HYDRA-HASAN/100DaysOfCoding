"use strict";
function generateRandomColorCode() {
    const characters = '0123456789ABCDEF';
    let colorCode = '#';
    for (let i = 0; i < 6; i++) {
        colorCode += characters[Math.floor(Math.random() * 16)];
    }
    return colorCode;
}
