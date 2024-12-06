import { assertEquals } from "@std/assert";
import { createHelloWorld } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(createHelloWorld()(), "Hello World");
});
