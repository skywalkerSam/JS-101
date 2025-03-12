import { assertEquals } from "@std/assert";
import { argumentsLength } from "./main.ts";

Deno.test(function argumentsLengthTest() {
  assertEquals(argumentsLength(1, 2), 2);
  assertEquals(argumentsLength(3, 6, 9), 3);
});
