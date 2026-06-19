const user = { name: "John", age: 30 };
const requiredKeys = ["name", "age", "email"];

// Checks if EVERY required key exists in the user object
const isValidStructure = requiredKeys.every(key => Object.hasOwn(user, key));

console.log(isValidStructure); // false (missing "email")