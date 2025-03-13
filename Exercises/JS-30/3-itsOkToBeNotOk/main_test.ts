import { assertEquals } from "@std/assert";
import { expect } from "./main.ts";

Deno.test(function assertEqualsTest() {
  assertEquals(expect(3).toBe(3), true);
  assertEquals(expect(6).notToBe(9), true);
});
