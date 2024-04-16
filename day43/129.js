"use strict";
class Example {
    x = 10;
    // Arrow function
    arrowFunction = () => {
        console.log(this.x); // Accesses Example's 'x'
    };
    // Traditional function
    traditionalFunction() {
        console.log(this.x); // Accesses Example's 'x'
    }
}
const obj = new Example();
const arrowFunc = obj.arrowFunction;
const tradFunc = obj.traditionalFunction;
arrowFunc(); // Outputs: 10 (this refers to 'obj')
tradFunc(); // Outputs: 10 (this refers to 'obj')
