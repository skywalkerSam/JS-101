export function createHelloWorld() {
  // returning a function is a closure pattern i.e a function that returns a function
  return function (...args: any): string {
    // console.log(args)
    return "Hello, World!";
  };
}

if (import.meta.main) {
  // console.log(createHelloWorld()())

  // And now, you can do this:
  const sayHello = createHelloWorld();
  console.log(sayHello())
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
