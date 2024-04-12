"use strict";
const obj = {
    prop1: 'value1',
    prop2: 'value2',
    method: function () {
        // Accessing prop1 using this keyword
        console.log(this.prop1);
    }
};
// Calling the method
obj.method(); // Output: value1
