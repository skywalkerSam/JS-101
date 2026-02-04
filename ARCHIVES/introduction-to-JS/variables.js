// Using camelCase for variable names is a good practice in JavaScript.

// var, NEVER use it...!
var userName = "skywalkerSam";

// let
let userAge = 18;

// const
const userPlanet = "Planet-Earth";

console.log(userName);
console.log(userAge);
console.log(userPlanet);

// I think that, semi-colons(;) are just a convention in Javascript. Big deal in C/C++ & Completely optional in python... lol ;)
// ASI - Automatic Semicolon Insertion


/* Scopes

Global Scope (let, const, var)
Local Scope, Function Scope ( var)
Block Scope ( let, const)

*/

// Global/Root/Window Scope
var scopeType = "Global";   // mutable

// Local Scope
function localScope() {
    // Child scope
    var scopeType = "Local";
    console.log(scopeType);

    // if you don't use `var` here, it will replace the global variable...!
}

// Block Scope
function blockScope(params) {
    for (let i = 0; i < 3; i++) {
        console.log(i, params);
    }
}


blockScope(scopeType);  // 0 "Global" 1 "Global" 2 "Global"

localScope();   // Local

console.log(scopeType); 
