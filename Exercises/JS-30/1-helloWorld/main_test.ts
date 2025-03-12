import { assertEquals } from "@std/assert";
import { createHelloWorld } from "./main.ts";

Deno.test(function helloWorld() {
  // assertEquals(createHelloWorld()(), "Hello World");
  const hello = createHelloWorld();
  assertEquals(hello("idk"), "Hello, World!");
});
