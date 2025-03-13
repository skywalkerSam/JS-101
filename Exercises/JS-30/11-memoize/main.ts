type Fn = (...params: number[]) => number;

/**
 * Memoizes a given function.
 * @param fn - The function to memoize
 * @returns A memoized version of the given function
 * @see https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */
export function memoize(fn: Fn): Fn {
  let memoizedArgs: number[] = [];
  return function (...args) {
    for (let i: number = 0; i < args.length; i++) {
      memoizedArgs.push(args[i]);
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
