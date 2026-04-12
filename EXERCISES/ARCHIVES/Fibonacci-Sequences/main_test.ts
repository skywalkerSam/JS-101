import { assertEquals } from "@std/assert";
import { fibonacciSeq } from "./main.ts";

Deno.test(function fibonacciSequences() {
  assertEquals(fibonacciSeq(19), 4181);
});
