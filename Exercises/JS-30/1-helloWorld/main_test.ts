import { assertEquals } from "@std/assert";
import { createHelloWorld } from "./main.ts";

Deno.test(function helloWorldTest() {
  assertEquals(createHelloWorld()(), "Hello, World!");
});

// #2
Deno.test(function helloWorldWithArgsTest() {
  const hello = createHelloWorld();
  assertEquals(hello("idk"), "Hello, World!");
});

// #3
Deno.test(function helloWorldWithMultipleArgsTest() {
  const hello = createHelloWorld();
  assertEquals(hello("idk", 'wtf?', 69, 96, true, false, [], {}), "Hello, World!");
});
