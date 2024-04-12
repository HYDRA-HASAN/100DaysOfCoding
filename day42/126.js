"use strict";
const obj = {
    name: 'John',
    greet: function () {
        console.log('Hello, ' + this.name); // 'this' refers to obj
    }
};
obj.greet(); // Output: Hello, John
