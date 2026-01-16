// ls
import { walk } from "jsr:@std/fs"; // jsr
import { relative } from "node:path"; // node/npm

/** Recursively list out files in a directory */
export async function tree(params: string): Promise<string[]> {
  const items = [];
  for await (const i of walk(params)) {
    // items.push(i.name);
    // items.push(i.path);
    items.push(relative(params, i.path));
  }
  return items;
}

//prevent default runs while importing
if (import.meta.main) {
  const files = await tree(Deno.args[0]);
  // console.log(files);
  console.log(files.join("\n"));
}

// deno -R main.ts .   (--read-file)
