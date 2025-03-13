// Create your own equivalent to `.map()`

/**
 * Creates an object to transform an array of numbers.
 * @param arr - The input array of numbers to transform
 * @param fn() - The function to transform the array
 * @returns An object with transformed values
 * @example
 * map(arr, someFn);
 * @see https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export function map(
  arr: number[],
  fn: (n: number, i: number) => number
): number[] {
  const returnedArray: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    const output: number = fn(arr[i], i);
    returnedArray.push(output);
  }
  return returnedArray;
}
