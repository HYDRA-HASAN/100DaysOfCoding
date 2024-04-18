"use strict";
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});
myPromise.then((result) => {
    console.log(result);
});
