import { assertEquals } from "@std/assert";
import { createCounter } from "./main.ts";

Deno.test(function increaseByOneTest() {
  const increaseByOne = createCounter(3);
  // First call returns initial value (using post-increment)
  assertEquals(increaseByOne(), 3);   // using `i++` and not, `++i`
  assertEquals(increaseByOne(), 4);
  assertEquals(increaseByOne(), 5);
  assertEquals(increaseByOne(), 6);
});
