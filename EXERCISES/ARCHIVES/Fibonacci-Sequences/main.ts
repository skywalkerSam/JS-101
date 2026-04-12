/**
 * The Fibonacci sequence is a series of numbers in which each number is the sum of the
 * two preceding numbers, usually starting with 0 and 1. This function takes a single
 * parameter, the number of the sequence to compute, and returns the value of the
 * sequence at that position.
 * @param {number} params - The index of the Fibonacci sequence to compute.
 * @returns {number} The value of the Fibonacci sequence at the given index.
 * @see https://en.wikipedia.org/wiki/Fibonacci_sequence
 */
export function fibonacciSeq(params: number): number {
  params -= 1;

  let a: number = 0;
  let b: number = 1;
  let sum: number = 0;

  for (let i: number = 0; i <= params; i++) {
    console.log(`Current: ${a} + ${b}`);
    // console.log(`${sum}: ${a} + ${b}`);

    sum = a + b;
    a = b;
    b = sum;
  }
  return a;
}

// Learn more at https://docs.deno.com/runtime/manual/eaamples/module_metadata#concepts
if (import.meta.main) {
  // fibonacciSeq(5);
  console.log(fibonacciSeq(6));
}
