const someArr: number[] = [3, 6, 9];

export function sum(acc: number, curr: number): number {
  return acc + curr;
}

type Fn = (accum: number, curr: number) => number;

// custom reduce.)
export function reduce(nums: number[], fn: Fn, init: number): number {
  let reducedVal: number = 0;
  let acc: number = init;
  if (nums.length === 0) {
    return init;
  }
  for (let i: number = 0; i < nums.length; i++) {
    reducedVal = fn(acc, nums[i]);
    acc = reducedVal;
  }
  return reducedVal;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const box: number = reduce(someArr, sum, 0);
  console.log(box);

  // .reduce()
  const wholeSum: number = someArr.reduce((acc, curr) => acc * curr, 1);
  console.log(wholeSum);

  // other arr methods
  console.log(someArr.map((i) => i + 3));
  console.log(someArr.filter((i) => i > 3));
}

// https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript
