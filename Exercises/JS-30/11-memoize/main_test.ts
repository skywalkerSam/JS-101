import { assertEquals } from "@std/assert";
import { memo, memoize } from "./main.ts";

// memoize()
// #1
Deno.test(function memoizeTest() {
  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
  });
  assertEquals(memoizedFn(3, 6), 9);
  assertEquals(memoizedFn(3, 6), 9);
  assertEquals(callCount, 1);
});

// #2
Deno.test(function memoizeTestTheSecond() {
  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
  });
  assertEquals(memoizedFn(3, 6), 9);
  assertEquals(memoizedFn(6, 3), 9);
  assertEquals(callCount, 2);
});

// #3
Deno.test(function freshMemoizeInsertionTest() {
  let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
  });
  assertEquals(memoizedFn(3, 6), 9);
  assertEquals(memoizedFn(6, 9), 15);
  assertEquals(memoizedFn(3, 3), 6);
  assertEquals(callCount, 3);
});

// memo()
// #4
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

// #5
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

// #6
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
