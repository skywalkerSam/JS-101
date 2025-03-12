type Fn = (...params: number[]) => number

export function memoize(fn: Fn): Fn {
    
    return function(...args) {
        
    }
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

//  https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript
