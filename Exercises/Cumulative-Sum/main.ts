// Sum algorithm

const array: number[] = [3, 6, 9, 33, 66, 99, 36, 69, 96];

/**
 * w/ reducer
 *
 * Takes an array of numbers and returns the sum of all of them.
 * Example: cumulativeSum([1, 2, 3, 4, 5]) => 15
 * @param {number[]} array - The array of numbers to sum.
 * @returns {number} The sum of all numbers in the array.
 */
export function cumulativeSum(array: number[]): number {
  const summed = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return summed;
}

/**
 * w/ for loop
 *
 * Takes an array of numbers and returns the sum of all of them.
 * Example: cumulativeSum([1, 2, 3, 4, 5]) => 15
 * @param {number[]} array - The array of numbers to sum.
 * @returns {number} The sum of all numbers in the array.
 */
export function cumulativeSummed(array: number[]): number {
  let summed = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log(i, summed)
    summed += array[i];
  }
  return summed;
}

/**
 * w/ forEach
 *
 * Takes an array of numbers and returns the sum of all of them.
 * Example: cumulativeSum([1, 2, 3, 4, 5]) => 15
 * @param {number[]} array - The array of numbers to sum.
 * @returns {number} The sum of all numbers in the array.
 */
export function cumulatedSum(array: number[]): number {
  let summed = 0;
  array.forEach((i) => {
    summed += i;
  });
  // console.log(summed)      // debugging101 lol ;)
  return summed;
}

if (import.meta.main) {
  console.log(cumulativeSum(array));
  console.log(cumulativeSummed(array));
  console.log(cumulatedSum(array));
}
