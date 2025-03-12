import { assertEquals } from "@std/assert";
import { someArr, map, plusOne } from "./main.ts";
import { createMap } from "./map-demo.ts";

Deno.test(function customMapTest() {
  assertEquals(map(someArr, plusOne), [3, 7, 11]);
});

// #2
Deno.test(function mapDemoTest() {
  const mapped = createMap(someArr);
  assertEquals(mapped.exponent(2), [9, 36, 81]);
  assertEquals(mapped.plus(6), [9, 12, 15]);
});
