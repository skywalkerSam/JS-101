import { assertEquals } from "@std/assert";
import { addTwoPromises, addTwoPromisesDemo } from "./main.ts";

Deno.test(async function addTwoPromisesTest() {
  assertEquals(
    await addTwoPromises(Promise.resolve(6), Promise.resolve(9)),
    await Promise.resolve(15)
  );

  // Additional tests
  // Test with negative numbers
  assertEquals(
    await addTwoPromises(Promise.resolve(-5), Promise.resolve(10)),
    5
  );

  // Test with zeros
  assertEquals(await addTwoPromises(Promise.resolve(0), Promise.resolve(0)), 0);

  // Test with large numbers
  assertEquals(
    await addTwoPromises(Promise.resolve(1000000), Promise.resolve(2000000)),
    3000000
  );
});

// #2
Deno.test(async function addTwoPromisesDemoTest() {
  assertEquals(
    await addTwoPromisesDemo(Promise.resolve(6), Promise.resolve(9)),
    await Promise.resolve(15)
  );
});
