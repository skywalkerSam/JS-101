// Custom `.filter()`

type Fn = (n: number, i: number) => boolean;

/**
 * Filters an array based on the provided filtering function.
 * @param arr - The array to filter
 * @param fn - The filtering function that determines which elements to keep
 * @returns A new array containing only the elements that pass the filter
 * @example
 * filter(arr, greaterThan3)
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * @see https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */
export function filter(arr: number[], fn: Fn): number[] {
  const filteredArr: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    // question requirement: fn(arr[i], i) evaluates to a truthy value.
    if (fn(arr[i], i)) {
      // console.log(arr[i], i);
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
