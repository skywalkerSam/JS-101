import { assertEquals } from "@std/assert";
import { memoize } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(memoize(2, 3), 5);
});
