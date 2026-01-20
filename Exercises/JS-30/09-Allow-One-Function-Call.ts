/**
 *
 * Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
 *
 * The first time the returned function is called, it should return the same result as fn.
 *
 * Every subsequent time it is called, it should return undefined.
 *
 * @param fn
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
    let called: boolean = false;
    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args);
        } else {
            return undefined;
        }
    };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
