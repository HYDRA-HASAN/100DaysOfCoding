let list:Array<String> = ["Hassan", "Minhaj", "Asif"];

console.log("I would like to invite " + list[0] + " for dinner.");
console.log("I would like to invite " + list[1] + " for dinner.");
console.log("I would like to invite " + list[2] + " for dinner.");

console.log("As "+ list[2] + " can't come.");
list[2] = "Ahmed";
console.log("I would like to invite " + list[0] + " for dinner.");
console.log("I would like to invite " + list[1] + " for dinner.");
console.log("I would like to invite " + list[2] + " for dinner.");