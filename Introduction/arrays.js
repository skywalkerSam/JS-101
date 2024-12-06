// Data Structures

//      #1- Array   (Like, python's list[])
//      #2- Object  (like python's dictonaries{})

console.log("Hello World... \n");

var wotd = "Hola! soy Sam."


var first_array = ["You can put anything in here.", "Just like python's list...!", "Index starts with 0 again...", "You can store functions() too....", 69, true, false, ":)"];

// console.log(first_array);
console.log(first_array[7]);
console.log(first_array[1]);    // Semicolons aren't effecting the code...



function espanolCounting() {
    var espanol_counting = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];      // Array
    return espanol_counting;
}

// console.log(espanolCounting())



var array_dos = [espanolCounting(), "Dos Oruguitas", 2, "Oruguitas", wotd];
console.log(array_dos);
console.log("Who are you?   ", array_dos[4], "Mucho Gusto.. \n");
console.log(array_dos[0]);



// Matrix Array...      (Something just like numpy array)

var matrixArray = [
    ["zero", "one", "two", "three"],
    ["cero", "uno", "dos", "tres"]
];
console.log(matrixArray[0][1]);
console.log(matrixArray[1][2]);



// Array Functions..

simpleArray = ["civilizations", "planets", "moons", "stars", "Optimistic Nihilism"];
console.log(simpleArray);

//.shift()
simpleArray.shift();
console.log(simpleArray);

// .pop()
simpleArray.pop();
console.log(simpleArray);

// .push()
simpleArray.push("Universe");
console.log(simpleArray);

// .concat()
simpleArray.concat(["Aliens", "Nihilism"]);   // It doesn't modify the original array, It creates a copy which you can assign to a variable...
console.log(simpleArray);

// .sort()
simpleArray.sort();
console.log(simpleArray);

simpleArray.push("Aliens", "Nihilism");
simpleArray.sort()
console.log(simpleArray);

var simpleArray = simpleArray.concat(["Spacefaring Civilizations", "The Legendary, 'Simulation Argument'..."]);
console.log(simpleArray)


// Spread Operator...
obj1 = ["hello"]
obj2 = ["world"]
obj3 = [...obj1, ...obj2]
console.log(obj3)       // Array [ "hello", "world" ]
