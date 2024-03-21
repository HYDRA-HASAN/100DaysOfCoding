"use strict";
let usernames = ["admin", "user1", "user2", "user3"];
usernames.forEach(usernames => {
    if (usernames === "admin") {
        console.log("Hello admin, would you like to check status?");
    }
    else {
        console.log(`Hello ${usernames}, thank for logging in`);
    }
});
