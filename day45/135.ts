const obj = {
    name: "John",
    age: 30,
    city: "New York"
};

const jsonString = JSON.stringify(obj, null, 2);
console.log(jsonString);