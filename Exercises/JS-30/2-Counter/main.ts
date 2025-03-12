// Simple Counter

// You'll see closure in action here!
export function createCounter(n: number): () => number {
  return function () {
    return n++; // use "++n" if you don't wanna skip the current value.)
  };
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
// if (import.meta.main) {
//   // you can't "n++" using this pattern.
//   // console.log(createCounter(9)());
//   // console.log(createCounter(9)());
//   // console.log(createCounter(9)());

//   const increaseByOne = createCounter(3);
//   console.log(increaseByOne());   // because, you're using "n++", and not "++n".)
//   console.log(increaseByOne());
//   console.log(increaseByOne());
//   console.log(increaseByOne());
// }

/** This tells ya how they're running thy function. Cool.)
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// NOTE: I'll write the tests some other day.) - Today's the day.)
