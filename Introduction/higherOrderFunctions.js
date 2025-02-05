/** 🔱 Higher Order Functions
 * 
    * A higher order function is a function that takes a function as an argument, or returns a function. They are commonly used in functional programming, and are a powerful tool for abstracting away complexity.
    * 
    * A function() is just an object in JavaScript, so we can pass functions around like any other object.

 */

// Function Declaration
function add(x, y) {
    return x + y;
}

// Function Expression
const addFunc = function sum(x, y) {    // named
    return x + y;
}

// Anonymous Function Expression
const anon = arr.map(function (value) {
    return value * 2;
})

// Arrow Function
const subtract = (x, y) => {
    return x - y;
}

// a function that takes a function as an argument...
function hofExample(x, y, func) {
    return func(x, y);
}

// console.log(add(6, 9))
// console.log(subtract(9, 6))

//hof
let x = 99
let y = 33
console.log(hofExample(x, y, add))
