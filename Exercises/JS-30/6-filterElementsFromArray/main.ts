function greaterThan3(num: number): boolean {
  if (num >= 3) {
    return true;
  }
  return false;
}

const anArray: number[] = [0, 1, 3, 6, 9, 12, 15, 18, 21];

type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  const filteredArr: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(filter(anArray, greaterThan3));

  //.filter()
  console.log(anArray.filter((i) => i > 6));

  //.map()
  console.log(anArray.map((i) => i ** 2));
}

// https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
