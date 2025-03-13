type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

/**
 * Creates a counter object with methods to increment, decrement, and reset the counter value.
 * @param init - The initial value of the counter
 * @returns An object with methods to control the counter
 * @example
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 * @see https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */
export function createCounter(init: number): Counter {
  let localInitValue: number = init;
  return {
    increment: () => {
      return ++localInitValue;
    },
    decrement: () => {
      return --localInitValue;
    },
    reset: () => {
      localInitValue = init;
      return localInitValue;
    },
  };
}
