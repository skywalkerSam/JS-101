// type JSONValue =
//   | null
//   | boolean
//   | number
//   | string
//   | JSONValue[]
//   | { [key: string]: JSONValue };

/**
 * Returns the number of arguments passed to the function
 * @param {...unknown} args - The arguments to count
 * @returns {number} The number of arguments
 * @example
 * argumentsLength(1, 2, 3); // 3
 * argumentsLength("a", null, true, {}); // 4
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length
 * @see https://leetcode.com/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */
export function argumentsLength(...args: unknown[]): number {
  return args.length;
}
