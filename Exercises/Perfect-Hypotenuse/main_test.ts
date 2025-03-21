import { assertEquals } from "@std/assert";
import findHypotenuse from "./find-hypotenuse.ts";

Deno.test(function findHypotenuseTest() {
  assertEquals(findHypotenuse(3, 4), 5);
});
