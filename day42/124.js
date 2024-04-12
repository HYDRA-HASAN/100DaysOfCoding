"use strict";
const myObject = {
    name: "My Object",
    getName: function () {
        return this.name;
    }
};
console.log(myObject.getName()); // Output: "My Object"
