import { assertEquals } from "@std/assert";
import { map } from "./main.ts";
import { createMap } from "./map-demo.ts";

const someArr: number[] = [3, 6, 9];

const plusOne = (x: number, y: number) => {
  return x + y;
};

Deno.test(function customMapTest() {
  assertEquals(map(someArr, plusOne), [3, 7, 11]);
});

// #2
Deno.test(function mapDemoTest() {
  const mapped = createMap(someArr);
  assertEquals(mapped.exponent(2), [9, 36, 81]);
  assertEquals(mapped.plus(6), [9, 12, 15]);
});
