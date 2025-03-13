import { assertEquals } from "@std/assert";
import { compose } from "./main.ts";

Deno.test(function composeTest() {
  const someFn = compose([(x) => x + 1, (x) => 2 * x]);
  assertEquals(someFn(3), 7);
});

// #2
Deno.test(function secondComposeTest() {
  // Functions are composed right-to-left: first double, then square, then increment.
  const someOtherFn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
  assertEquals(someOtherFn(6), 145);
});

// #3
Deno.test(function emptyComposeTest() {
  const emptyFn = compose([]);
  assertEquals(emptyFn(9), 9);
});
