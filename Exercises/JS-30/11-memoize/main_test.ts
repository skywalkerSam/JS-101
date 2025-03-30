import { assertEquals } from "@std/assert";
import { memo } from "./main.ts";

Deno.test(function memoTest() {
  let callCount = 0;
  const memoFn = memo(function (a, b) {
    callCount += 1;
    return a + b;
  });
  assertEquals(memoFn(3, 6), 9);
  assertEquals(memoFn(3, 6), 9);
  assertEquals(callCount, 1);

  // console.log(callCount); // 1
});

Deno.test(function memoTestTheSecond() {
  let callCount = 0;
  const memoFn = memo(function (a, b) {
    callCount += 1;
    return a + b;
  });
  assertEquals(memoFn(3, 6), 9);
  assertEquals(memoFn(6, 3), 9);
  assertEquals(callCount, 2);

});

Deno.test(function freshMemoInsertionTest() {
  let callCount = 0;
  const memoFn = memo(function (a, b) {
    callCount += 1;
    return a + b;
  });
  assertEquals(memoFn(3, 6), 9);
  assertEquals(memoFn(6, 9), 15);
  assertEquals(memoFn(3, 3), 6);
  assertEquals(callCount, 3);
});
