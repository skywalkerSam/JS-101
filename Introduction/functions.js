// Function Declaration
function firstFun() {
    // A function must `return` something...!
    console.log("This is my first function ever written in Javascript...");
    console.log("I'm skywalkerSam...");
}

// You must call the function in order to execute it, unless they're callback functions ( firstFun )...
firstFun()


// A function with parameters and arguments
function simpleSum(a, b) {
    // A function must return something if, you wanna store the value or, use it...
    return (a+b);
}

simpleSum(5, 10);



// Function Expression     (Anonymous function :)
var simpleDiv = function(x,y) {     // parameters
    return (x/y);
}

simpleDiv(1,0);     // arguments


// Arrow Functions (Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)


const materials = [
    'Oxygen',
    'Nitrogen',
    'Hydrogen',
    'Carbon',
  ];
  
console.log(materials.map(material => material.length));
// Expected output: Array [8, 6, 7, 9]


const life = (x) => {
  return console.log(x);
}

life(materials)

// karma function
const karma = [
    'Hope',
    'Love',
    'Hate',
    'Change',
    'Rage',
    'Horny',
    'Sad',
    'Death',
    'Despair',
    'Do not go gentle into that good night...!',
]

function fuckThisLife(shit){
  return console.log(shit)
}

fuckThisLife('An Odinary Human: ' + karma)



// Function Declaration...
function FunctionOne() {
    console.log("It's created by Function Declaration...");     // A function() must return something...
};



// Function Expression...
const FunctionTwo = function () {
    console.log("It's created by Function Expression...");
};

const FunctionThree = function MatrixFunction() {
    console.log("It's a Matrix Function...");
};


// Function with parameters...
function sumFunction(numOne, numTwo) {
    return (numOne + numTwo);
};



// Expressions...
//      1+3;
//      let sam = "Developer";  
//      return true;



// Calling or, Invoking a function()...
//      alert()
//      prompt()
//      console.log()
console.log(FunctionTwo());
console.log(FunctionThree);
console.log(sumFunction(1, 2));



// function VS method...
//      function()
function thisIsAFunction() {
    console.log("\t If you'll try to build something with Vanilla.js, you'll end up building your own JS framework. And the last thing the world wants is 'A New Javascript Framework' :) ...\n")
}

console.log(thisIsAFunction());


//      method, It's also a function() but, inside a Javascript Object :)
let objectOne = {
    thisISAMethod: function () {
        console.log("\t Yes, a function() inside an object is so called \'a method\' ...");
        console.log("\t You can access a method by 'MethodName.FunctionName()' ...");
    }
};

console.log(objectOne.thisISAMethod());
