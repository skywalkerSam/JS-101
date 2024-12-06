/**  Fibonacci Sequences
 * https://learn.microsoft.com/en-us/training/modules/web-development-101-introduction-programming/3-programming-languages
 */

export function fibonacciSeq(params: number): number {
  params -= 1;  //matching the sequence requested
  let x: number = 0;
  let y: number = 1;
  let nextTerm: number = 0;

  for (let i: number = 0; i <= params; i++) {
    // console.log(`F${i}: x = ${x}, y = ${y}\n`)
    // console.log(`x = ${x}, y = ${y}\n`);
    // console.log(x, y)
    // console.log(x)
    nextTerm = x + y;
    x = y;
    y = nextTerm;
  }
  return x;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  // fibonacciSeq(5);
  console.log(fibonacciSeq(19));
}
