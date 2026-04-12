/**
 *
 * Given a function fn, return a memoized version of that function.
 *
 * A memoized function is a function that will never be called twice with the same inputs. Instead, it will return a cached value.
 *
 * You can assume there are 3 possible input functions: sum, fib, and factorial.
 *
 * sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
 *
 * fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 *
 * factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 *
 * @param fn
 */

type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
    const memoizedCache = new Map<string, number>();

    return function (...args) {
        const key: string = JSON.stringify(args);
        if (memoizedCache.has(key)) {
            return memoizedCache.get(key) ?? 1;
        } else {
            const value: number = fn(...args);
            memoizedCache.set(key, value);
            return value;
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

// #2
function memo(fn: Fn): Fn {
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
 * JSON.stringify() exists because, JavaScript is JavaScript.)
 *
 * let one = JSON.stringify([6, 7])
 * let another = JSON.stringify([6, 7])
 * console.log(one === another) // true
 *
 *
 * Now, without `JSON.stringify()`
 *
 * let one = [6, 7]
 * let another = [6, 7]
 * console.log(one === another) // false
 *
 */
