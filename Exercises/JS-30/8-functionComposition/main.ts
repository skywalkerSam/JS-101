type F = (x: number) => number;

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

const fn = compose([(x) => x + 1, (x) => 2 * x]);
// fn(4); // 9

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(fn(4));
  const box = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
  console.log(box(3));
}

// https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
