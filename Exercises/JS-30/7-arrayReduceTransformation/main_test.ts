import { assertEquals } from "@std/assert";
import { someArr, sumFn, reduce, multipleFn } from "./main.ts";

Deno.test(function reduceTest() {
  assertEquals(reduce(someArr, sumFn, 0), 18);
});

// #2
Deno.test(function secondReduceTest() {
  assertEquals(reduce(someArr, multipleFn, 1), 162);
});
