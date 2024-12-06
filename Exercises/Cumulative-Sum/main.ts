// summing algorithm

const thearrayay: number[] = [3, 6, 9, 33, 66, 99, 36, 69, 96];

// reducer
export function cumSum(array: number[]): number {
  const summed = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return summed;
}

// for loop
export function cumSummed(array: number[]): number {
  let summed = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log(i, summed)
    summed += array[i];
  }
  return summed;
}

// forEach
export function cummedSum(array: number[]): number {
  let summed = 0;
  array.forEach((v) => {
    summed += v;
  });
  // console.log(summed)      // debugging101 lol ;)
  return summed;
}

if (import.meta.main) {
  console.log(cumSum(thearrayay));
  console.log(cumSummed(thearrayay));
  console.log(cummedSum(thearrayay));
}
// i know how it sounds, please don't...🙏
