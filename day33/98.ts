const today = new Date();
const newYear = new Date(today.getFullYear() + 1, 0, 1);
const timeDiff = newYear.getTime() - today.getTime();
const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

console.log(`There are ${daysLeft} days left until New Year.`);