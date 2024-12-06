var test = true;    // false

if (test === true) {
    alert("You're now qualified :)");      // " console.log() " on node terminal...

} else {
    alert("You have to learn more :(");
}

// Terenary Operator

true? "It's True": "It's False";    // "It's True"

false? "It's True": "It's False";   // "It's False"


function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";   // "You may enter"
console.log(answer);

var answer = isUserValid(false) ? "You may enter" : "Access Denied";  // "Access Denied"
console.log(answer);



// Switch-case
function moveCommand(direction) {
    var whatHappens;
    switch(direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
