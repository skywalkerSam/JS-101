import { assertEquals } from "@std/assert";
import { once } from "./main.ts";

const someFn = (x: number, y: number, z: number) => {
  return x + y + z;
};

Deno.test(function oneFunctionCallTest() {
  const box = once(someFn);
  assertEquals(box(3, 6, 9), 18);
  assertEquals(box(3, 6, 9), undefined);
});
