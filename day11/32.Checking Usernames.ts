const currentUsers = ["user1", "admin", "user3", "user4", "user5"];
const newUsers = ["User1", "User6", "user7", "admin", "User9"];

newUsers.forEach(newUser => {
    const lowerCaseNewUser = newUser.toLowerCase();
    if (currentUsers.includes(lowerCaseNewUser)) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});