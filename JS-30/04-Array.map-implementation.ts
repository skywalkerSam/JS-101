/**
 * Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.
 *
 * The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.
 *
 * Please solve it without the built-in `Array.map` method.
 *
 * @param arr
 * @param fn
 */

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const returnedArray: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    const output: number = fn(arr[i], i);
    returnedArray.push(output);
  }
  return returnedArray;
}
