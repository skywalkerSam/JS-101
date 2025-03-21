export default function perfectHypotenuse() {
  // smallest values for a 📐 that has a perfect `c` i.e w/o floating values
  let a: number = 3;
  let b: number = 4;
  let c: number = 5;
  let hypotenuseStore: number[] = [];
  for (let i = 0; hypotenuseStore.length < 10; i++) {
    // what exactly do we do here...? brute force??

    if (c ** 2 === a ** 2 + b ** 2) {
      hypotenuseStore.push(c);
    }
  }
  console.log(hypotenuseStore);
  return hypotenuseStore;
}
