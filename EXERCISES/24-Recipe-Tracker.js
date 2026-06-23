let recipes = [];

let recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
};

let recipe2 = {
  name: "Chicken Curry",
  ingredients: [
    "chicken breast",
    "coconut milk",
    "curry powder",
    "onion",
    "garlic",
  ],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: "",
};

let recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
};

// let recipe1Name = recipe1.name;
// let recipe2CookingTime = recipe2.cookingTime;
// let recipe3Ingredients = recipe3.ingredients;

// console.log(recipe1Name);
// console.log(recipe2CookingTime);
// console.log(recipe3Ingredients);

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(arr) {
  return arr.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

let recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
let recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);

console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes);
