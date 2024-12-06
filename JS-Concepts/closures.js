/** Closures
 * 
 * A closure is a function that has access to the parent scope, even after the parent function has closed. JS will automatically store the state of a closure in the heap memory, even after the parent function has returned. This behavior makes them useful for encapsulating private variables.

 */

// Closed Expression/NO Closure/Pure Function/NO external transactions/Self-contained
function pureFun() {
    return 'selfContainedPureFunction';
}

function x1(value) {
    return value + ' x1\n';
}

function x3(value) {
    return value + ' x3\n';
}

console.log(pureFun())
//hof
console.log(x1(pureFun()))
console.log(x3(pureFun()))


// Open Expression/Closure
function closure(moments) {
    let theState = 'fucked';
    // console.log(theState)
    function innerClosure() {
        theState = moments ?? 'fuckedAF...';
        // console.log(theState)
        return theState;
    }
    return innerClosure;    // you can make the function anonymous n' return directly... 
}

console.log(closure())
// console.log(closure()())
console.log(closure('theMomentsWeLiveBy...')())

