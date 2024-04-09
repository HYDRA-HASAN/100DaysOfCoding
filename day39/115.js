"use strict";
function logDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number");
            break;
    }
}
logDayOfWeek(1); // Output: Sunday
logDayOfWeek(4); // Output: Wednesday
logDayOfWeek(8); // Output: Invalid day number
