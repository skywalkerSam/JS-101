//  For Loops in Javascript...

todos = [
    "Wake Up",
    "Coffee",
    "Research & Development",
    "Coffee",
    "Sleep..."
];

var todoLength = todos.length;

/*
for (var i = 0; i < todoLength; i += 1) {       // for(){}  loop 
    todos.pop();
    console.log(todos);
    // console.log("Done :)");
}  
*/


// forEach Loop...

todos.forEach(function (i, logTodos) {
    console.log(i, logTodos);

});



aim = [
    "Python",
    "Web Technologies",
    "Unreal Engine - Simulations",
    "AI"
];


function myAim() {
    console.log(myAim);
};

console.log(myAim);






/* man, readin this takes be way back to when i was just starting out... lol ;)


I think one programming language is enough for me, "Python's really good"

    >_ Rather than wasting my time with different languages, I should master one language & start solving problems..

    >_ My main aim is to do AI stuff always was! I came here to learn some web technologies which I'll learn as needed...


//Hahahaha, I'm back!    ( 12023.04.08.0200 )

*/




// .map() method...

var numbers = [1, 2, 3, 4, 5];

multiplied_by_two = numbers.map(function (x) {
    return x * 2;
});
console.log(multiplied_by_two);


