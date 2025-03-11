import { assertEquals } from "@std/assert";
import { filter, anArray, greaterThan3 } from "./main.ts";

Deno.test(function filterTest() {
  assertEquals(filter(anArray, greaterThan3), [3, 6, 9, 12, 15, 18, 21]);
});
