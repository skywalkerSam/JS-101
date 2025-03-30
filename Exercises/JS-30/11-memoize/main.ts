type Fn = (...params: number[]) => number;

/**
 * Memoizes a given function.
 * @param fn - The function to memoize
 * @returns A memoized version of the given function
 * @see https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */
export function memo(fn: Fn): Fn {
  let memoizedArgs: string = "";
  let cachedValue: number = 1;
  return function (...args) {
    if (JSON.stringify(args) === memoizedArgs) {
      return cachedValue;
    } else {
      const memoizedValue = fn(...args);
      cachedValue = memoizedValue;
      memoizedArgs = JSON.stringify(args);
      return memoizedValue;
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

/** Notes/Resources
 * 
 * w/ JSON.stringify() bc, JavaScript is JavaScript.)
 *
 * let one = JSON.stringify([5, 6])
 * let another = JSON.stringify([5, 6])
 * console.log(one === another) //true
 *
 *
 * w/o JSON.stringify()
 *
 * let one = [3, 6]
 * let another = [3, 6]
 * console.log(one === another) //false
 *
 */
