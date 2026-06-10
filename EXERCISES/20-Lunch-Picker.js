let lunches = [];

function addLunchToEnd(array, str) {
  array.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array, str) {
  array.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array) {
  let lunchRemoved = array.pop(-1);
  if (lunchRemoved) {
    console.log(`${lunchRemoved} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return array;
}

function removeFirstLunch(array) {
  let lunchRemoved = array.shift(0);
  if (lunchRemoved) {
    console.log(`${lunchRemoved} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return array;
}

function getRandomLunch(array) {
  let randomLunch = array[Math.floor(Math.random() * array.length)];
  if (randomLunch && array.length !== 0) {
    console.log(`Randomly selected lunch: ${randomLunch}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(array) {
  if (array.length !== 0) {
    console.log(`Menu items: ${array.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}

// tests
let fullLunch = [
  "Chicken Salad",
  "Turkey Salad",
  "Veg Salad",
  "Chicken Sandwich",
  "Turkey Sandwich",
  "Veg Sandwich",
  "Hamburger",
  "Cheeseburger",
];
let emptyLunch = [];

// addLunchToEnd test
console.log(addLunchToEnd(fullLunch, "Cheesecake"));

// addLunchToStart test
console.log(addLunchToStart(fullLunch, "Napol Pizza Slice"));

// removeLastLunch test
console.log(removeLastLunch(fullLunch));
console.log(removeLastLunch(emptyLunch));

// removeFirstLunch test
console.log(removeFirstLunch(fullLunch));
console.log(removeFirstLunch(emptyLunch));

// getRandomLunch test
console.log(getRandomLunch(fullLunch));
console.log(getRandomLunch(emptyLunch));

// showLunchMenu test
console.log(showLunchMenu(fullLunch));
console.log(showLunchMenu(emptyLunch));

// getRandomLunch error!!
console.log(Math.floor(Math.random() * fullLunch.length));
console.log(fullLunch[Math.floor(Math.random() * fullLunch.length)]);
// Note: Do not add `+1` while working with range that starts with 0.
