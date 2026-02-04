/**
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 *
 * The three functions are:
 *
 * increment() increases the current value by 1 and then returns it.
 *
 * decrement() reduces the current value by 1 and then returns it.
 *
 * reset() sets the current value to init and then returns it.
 *
 * @param init
 */

type Counter = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
};

function createCounter(init: number): Counter {
    let initLocalVal = init;
    return {
        increment: () => {
            return ++initLocalVal;
        },
        decrement: () => {
            return --initLocalVal;
        },
        reset: () => {
            initLocalVal = init
            return initLocalVal;
        }
    }
}

const counter = createCounter(5)
console.log(counter.increment()) // 6
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4

