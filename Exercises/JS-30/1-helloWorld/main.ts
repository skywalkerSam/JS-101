// Hello, World!

/**
 * The legendary Hello World function.)
 * @param just for fun 🎉
 * @returns Hello, World!
 * @example
 * createHelloWorld()();  // using direct invocation
 * @see https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
 * @see https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @note Use closure patterns!
 * @using `unknown[]` instead of `any` for better type definition
 */
export function createHelloWorld() {
  return function (...args: unknown[]): string {
    // console.log(args)
    return "Hello, World!";
  };
}

// if (import.meta.main) {
//   // console.log(createHelloWorld()())

//   // And now, you can do this:
//   const sayHello = createHelloWorld();
//   console.log(sayHello())
// }

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
