export type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

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

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts

// if (import.meta.main) {
//   const counter = createCounter(5);
//   console.log(counter.increment()); // 6
//   console.log(counter.reset()); // 5
//   console.log(counter.decrement()); // 4
// }
