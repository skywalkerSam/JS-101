// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

export function createCounter(n: number): () => number {
    return function () {
        return n++; // using post-increment
    };
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

const increaseByOne = createCounter(6);
console.log(increaseByOne());
console.log(increaseByOne());
console.log(increaseByOne());
