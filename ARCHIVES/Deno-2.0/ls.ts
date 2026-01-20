// ls

export async function ls(params: string): Promise<string[]> {
  const items = [];
  for await (const i of Deno.readDir(params)) {
    items.push(i.name);
  }
  return items;
}

// const files = await ls(Deno.args[0]);
const files = await ls("./");
// console.log(files);
console.log(files.join("\n"));


// deno -R ls.ts .   (--read-file)
