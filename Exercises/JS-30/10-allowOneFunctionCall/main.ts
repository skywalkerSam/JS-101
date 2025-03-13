// type JSONValue =
//   | null
//   | boolean
//   | number
//   | string
//   | JSONValue[]
//   | { [key: string]: JSONValue };

// type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;
type OnceFn = (...args: unknown[]) => unknown | undefined;

/**
 * Returns a function that can be called only once.
 * On the first call, it will execute the given function with the given arguments.
 * On subsequent calls, it will return `undefined`.
 * @param fn The function to call once
 * @returns A function that calls the given function once
 * @see https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @using Generic function to preserve type information
 */
// @ts-ignore Intentional type `any` and not, `unknown`
export function once<T extends (...args: any[]) => any>(fn: T): OnceFn {
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

// Commented for archival purposes.

// @ts-ignore Intentional broad fn() definition
// export function once(fn: Function): OnceFn {
