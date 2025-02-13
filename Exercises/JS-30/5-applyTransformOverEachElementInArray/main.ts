// create your own equivalent to map()

export const someArr: number[] = [3, 6, 9];

export const plusOne = (x: number, y: number) => {
  return x + y;
};

export function map(
  arr: number[],
  fn: (n: number, i: number) => number
): number[] {
  const returnedArray: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    const output: number = fn(arr[i], i); // the function requires two params
    returnedArray.push(output);
  }
  return returnedArray;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const out: number[] = map(someArr, plusOne); // not calling the function here directly!
  console.log(out);
}
