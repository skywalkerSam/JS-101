/**
 * Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.
 *
 * The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.
 *
 * Please solve it without the built-in `Array.map` method.
 */

const theArray = [3, 6, 9];
const theFunction = (n: number, i: number): number => n ** i;

/**
 * Using `Array.map` for reference
 * 
 * @param arr 
 * @param fn 
 * @returns 
 */
function arrayMap(
  arr: number[],
  fn: (n: number, i: number) => number
): number[] {
  const transformedArray: number[] = [];
  arr
    .map((value, i) => fn(value, i))
    .forEach((value) => transformedArray.push(value));

  return transformedArray;
}

/**
 * Implement the `map` function as described above w/o using `Array.map`.
 *
 * @param arr
 * @param fn
 */
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const transformedArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArray.push(fn(arr[i], i));
  }

  return transformedArray;
}

console.log(arrayMap(theArray, theFunction)); // Output: [1, 6, 81]
console.log(map(theArray, theFunction)); // Output: [1, 6, 81]
