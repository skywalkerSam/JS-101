import { assertEquals } from "@std/assert";
import { createCounter } from "./main.ts";

Deno.test(function increaseByOneTest() {
  const increaseByOne = createCounter(3);
  assertEquals(increaseByOne(), 3);   // bc using i++ and not ++i .)
  assertEquals(increaseByOne(), 4);
  assertEquals(increaseByOne(), 5);
  assertEquals(increaseByOne(), 6);
});
