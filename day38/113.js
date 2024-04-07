"use strict";
function checkMapForCanada(map) {
    if (map.has("Canada")) {
        const capital = map.get("Canada");
        console.log(`The capital of Canada is ${capital}`);
    }
    else {
        console.log("Canada is not found in the map");
    }
}
