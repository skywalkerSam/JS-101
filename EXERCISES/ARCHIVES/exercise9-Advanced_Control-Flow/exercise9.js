//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

var experiencePoints = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}


//#2 return value when moveCommand("forward");
var whatHappens = moveCommand("forward") ? "you encounter a monster" : "please enter a valid direction"; 

//#3 return value when moveCommand("back");
var whatHappens = moveCommand("back") ? "you arrived home" : "please enter a valid direction";

//#4 return value when moveCommand("right");
var whatHappens = moveCommand("right") ? "you found a river" : "please enter a valid direction";

//#5 return value when moveCommand("left");
var whatHappens = moveCommand("left") ? "you run into a troll" : "please enter a valid direction";

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!


// My Hot Take: Running JS code for testing, just Sucks!
// 1. Browser Console  2. Node.js  
// There's nothing like python interpreter, where you can just run the code and see the output!
