import { assertEquals } from "@std/assert";
import { createCounter } from "./main.ts";

Deno.test(function counterTheSecondTest() {
  const counter = createCounter(3);
  assertEquals(counter.increment(), 4);
  assertEquals(counter.increment(), 5);
  assertEquals(counter.increment(), 6);
  assertEquals(counter.reset(), 3);
  assertEquals(counter.decrement(), 2);
  assertEquals(counter.decrement(), 1);
  assertEquals(counter.decrement(), 0);
});
