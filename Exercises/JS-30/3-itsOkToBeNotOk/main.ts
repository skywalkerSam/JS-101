// Just be.)

type ToBeOrNotToBe<T> = {
  toBe: (val: T) => boolean;
  notToBe: (val: T) => boolean;
};

/**
 * Creates an assertion object for testing equality and inequality.
 * @param val - The value to assert against
 * @returns An object with toBe and notToBe assertion methodsCreates an assertion object for testing equality and inequality.
 * @returns An object with toBe and notToBe assertion methods
 * @example
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal: expected 5 to not be 5"
 * @see https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @using generic type `<T>` instead of `any`
 */
export function expect<T>(val: T): ToBeOrNotToBe<T> {
  return {
    toBe: (toBeVal: T) => {
      if (val === toBeVal) {
        return true;
      } else {
        // throw new Error("Not Equal");
        throw new Error(`Not Equal: expected ${toBeVal}, but got ${val}`);
      }
    },
    notToBe: (notToBeVal: T) => {
      if (val !== notToBeVal) {
        return true;
      } else {
        // throw new Error("Equal");
        throw new Error(`Equal: expected ${val} to not be ${notToBeVal}`);
      }
    },
  };
}
