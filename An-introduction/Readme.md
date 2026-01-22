# [JavaScript](https://www.freecodecamp.org/learn/javascript-v9/) Notes

w/ freeCodeCamp.org

- **immutability** means that once something is *created*, it **cannot be changed**.

- A `function()` is a reusable block of code that performs a specific task and can be called with various inputs.

- A `method` is a *type of function* that is associated with an `object`, meaning it operates on the data contained *within that object*.

&emsp;

## `undefined` vs `null`

- `undefined` means a variable has been declared but hasn't been given a value yet.

```javascript

let thingsBe;
console.log(thingsBe); // undefined
```

- `null` means the variable has been intentionally set to "nothing" and does not hold any value.

```javascript

let go = null;
console.log(go) // null
```

&emsp;

## Naming a *variable*

- Variables in JavaScript must begin with a `letter`, an underscore (`_`), or a dollar sign (`$`).

```javascript

let age;
let _score;
let $total;
```

- They **cannot start** with a _number_.

```javascript

// invalid variable name
let 1stPlace;   // starts with a number
```

- Variable names are **case-sensitive**, meaning the word `age` in all _lowercase_ and the word `Age` with a capital `A` are considered _different variables_.

```javascript

let age = 25;
let Age = 30;
console.log(age); // 25
console.log(Age); // 30
```

This is why it's important to stick with a consistent naming convention like `camelCase`. camelCase is where the _first word is all lowercase_ and each subsequent word starts with an **uppercase** letter.

```javascript

let thisIsCamelCase;
let anotherExampleVariable;
let freeCodeCampStudents;
```

- There are certain keywords in JavaScript that you **cannot** use as _variable_ names, such as `let`, `const`, `function`, or `return`, as they are reserved for the language itself.

- You should also avoid using special characters like exclamation points (`!`) or at (`@`) symbols, in your variable names. It is best to **keep variable names readable** by using letters, numbers, underscores, or dollar signs.


&emsp;

### `let`

- The `let` keyword allows you to declare variables that can be updated or reassigned later.

```javascript

let score = 10;
console.log(score); // 10
score = 20;
console.log(score); // 20
```

&emsp;

### `const`

- `const` is used to declare variables that are constant.

- Once you assign a value to a variable declared with `const`, you **cannot reassign** it.

This makes `const` ideal for values that you **don't want to change** accidentally during the execution of your program.

```javascript

const maxScore = 100;
console.log(maxScore); // 100

// Once maxScore is assigned the value 100, it cannot be changed.

maxScore = 200; // This will result in an error
```

- Variables declared with `const` must be assigned a value at the time of declaration. 

```javascript

const age; // Error: Missing initializer in const declaration
```

- Use `const` when you want to declare variables that should remain **constant**, like `configuration` values or `settings` that shouldn't be changed *accidentally**

`Note`: You can also use the `var` keyword, but it's **not as recommended anymore**. The `var` is kind of like `let`, except it has a **wider scope**, which is more likely to cause problems in your program.

&emsp;

## "strings"

- `strings` are immutable. 

 So, when you create a string, you **can't change its characters directly**. instead, you would **create a new string** if you want to make changes.

&emsp;

## String Concatenation

### w/ `+`

- One disadvantage of using the `+` operator for string concatenation is that it can lead to **spacing issues** if you don't carefully manage the spacing between the concatenated strings.

- `+` operator is best for *simple concatenation*, especially when you need to combine a few strings or variables.

```javascript

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + lastName; 
console.log(fullName); // "JohnDoe"
```

### w/ `+=`

- if you need to **add or append** to an existing string, then you can use the `+=` operator.

- `+=` operator is useful when building up a string step by step or *appending* new content to an existing string variable.

```javascript

let greeting = 'Hello';
greeting += ', John!';

console.log(greeting); // "Hello, John!"
```

### w/ `concat()`

- `.concat()` method is beneficial when you need to *concatenate multiple strings* together.

```javascript

let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2); 
console.log(result); // Hello World
```

