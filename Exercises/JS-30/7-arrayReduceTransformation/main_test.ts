import { assertEquals } from "@std/assert";
import { someArr, sumFn, reduce, multipleFn } from "./main.ts";

Deno.test(function reduceTest() {
  assertEquals(reduce(someArr, sumFn, 0), 18);
  assertEquals(reduce(someArr, multipleFn, 1), 162);
});
