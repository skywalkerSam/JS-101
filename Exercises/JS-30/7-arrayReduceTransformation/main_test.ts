import { assertEquals } from "@std/assert";
import { reduce } from "./main.ts";

const someArr: number[] = [3, 6, 9];

function sumFn(acc: number, curr: number): number {
  return acc + curr;
}

function multipleFn(acc: number, curr: number): number {
  return acc * curr;
}

Deno.test(function reduceTest() {
  assertEquals(reduce(someArr, sumFn, 0), 18);
});

// #2
Deno.test(function secondReduceTest() {
  assertEquals(reduce(someArr, multipleFn, 1), 162);
});
