type F = (x: number) => number;

export function compose(functions: F[]): F {
  return function (x) {};
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("");
}

// https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
