/**
 * Simple Counter
 * @param n - initial value
 * @returns incremented value
 * @see https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
 * @see https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @note Do not use direct function invocation.
 */
export function createCounter(n: number): () => number {
  return function () {
    // using post-increment
    return n++;
  };
}

// if (import.meta.main) {
//   // using direct function invocation!
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
