import { assertEquals } from "@std/assert";
import { sleep } from "./main.ts";

Deno.test(async function sleepTest() {
  const t = Date.now();
  const t2 = await sleep(1000).then((() => Date.now() - t))
  assertEquals(t2, 1003) // might need to run it a few times bc of the additional delays.)
});
