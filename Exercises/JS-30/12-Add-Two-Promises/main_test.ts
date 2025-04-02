import { assertEquals } from "@std/assert";
import { addTwoPromises, addTwoPromisesDemo } from "./main.ts";

Deno.test(async function addTwoPromisesTest() {
  assertEquals(await addTwoPromises(Promise.resolve(6), Promise.resolve(9)), await Promise.resolve(15));
});

// #2
Deno.test(async function addTwoPromisesDemoTest() {
  assertEquals(await addTwoPromisesDemo(Promise.resolve(6), Promise.resolve(9)), await Promise.resolve(15));
});

