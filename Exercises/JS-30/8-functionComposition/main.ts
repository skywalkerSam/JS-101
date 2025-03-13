// f(m(l(x))): Function Composition.)

type F = (x: number) => number;

/**
 * Composes an array of functions from right to left.
 * @param functions - Array of functions to compose
 * @returns A function that represents the composition of the input functions
 * @example
 * // Returns a function that first multiplies by 2, then adds 1
 * compose([(x) => x + 1, (x) => 2 * x])
 * @see https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
 */
export function compose(functions: F[]): F {
  return function (x) {
    if (functions.length === 0) {
      return x;
    }
    for (let i: number = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
}

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
// fn(4); // 9

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts

// if (import.meta.main) {
//   console.log(fn(4));

//   const box = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
//   console.log(box(3));

//   const emptyBox = compose([]);
//   console.log(emptyBox(6));
// }


