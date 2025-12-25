// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

export function createHelloWorld() {
    return function (...args: unknown[]): string {
        return "Hello World";
    };
}

const f = createHelloWorld();
console.log(f()); // "Hello World"
