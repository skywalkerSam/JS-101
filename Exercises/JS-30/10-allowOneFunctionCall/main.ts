type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

// @ts-ignore Intentional broad fn() definition.)
export function once(fn: Function): OnceFn {
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
