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
 * @see https://leetcode.com/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */
export function argumentsLength(...args: unknown[]): number {
  return args.length;
}

/**
 * argumentsLength(1, 2, 3); // 3
 */

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts

// if (import.meta.main) {
//   console.log(argumentsLength(1, 2, 3, "idk", 0));
// }
