// Custom .reduce()

type Fn = (accum: number, curr: number) => number;

/**
 * Reduces an array of numbers by applying a reduction function from left to right.
 * @param nums - The array of numbers to reduce
 * @param fn - The reduction function to apply
 * @param init - The initial value of the accumulator
 * @returns The final value of the accumulator
 * @example
 * reduce(arr, (acc, curr) => acc + curr, 0); // 6
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * @see https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript
 */
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
