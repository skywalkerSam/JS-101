# [JavaScript](https://www.freecodecamp.org/learn/javascript-v9/) Notes

w/ freeCodeCamp.org

- **immutability** means that once something is *created*, it **cannot be changed**.

- A `function()` is a reusable block of code that performs a specific task and can be called with various inputs.

- A `method` is a *type of function* that is associated with an `object`, meaning it operates on the data contained *within that object*.

- A **compiler** translates high-level programming language code into **machine-readable** code, which creates an **executable** file.

&nbsp;

## JavaScript as a Dynamically Typed Language

it means that **you don't have to specify the data type of a variable** when you declare it. The JavaScript engine **automatically determines** the data type based on the value assigned to the variable **during execution**.

```js
let error = 404; // JavaScript treats error as a number
error = "Not Found"; // JavaScript now treats error as a string
```

`Note`: The **flexibility** of **dynamic typing** makes JavaScript more **forgiving** and easy to work with for **quick scripting**, but it can also introduce **"bugs"** that may be **harder to catch**, especially as your program grows larger*

### Statically Typed Languages

in **statically typed** languages like `C#` or `C++`, **you must declare the data type of a variable when you create it**, and that type **cannot** be *changed*.

- Other languages, like `C#`, that are **not dynamically typed** would result in an error:

  ```c
  int error = 404; // value must always be an integer
  error = "Not Found"; // This would cause an error in C#
  ```

`Note`: Statically typed languages enforce **stricter rules** that can **prevent certain errors before the program runs**, but they **require more upfront declaration** and offer **less flexibility** in changing *types*.


### Dynamic vs. Static

- The difference between dynamic typing and static typing lies in the **flexibility vs. the safety of your code**. 

- Dynamically typed languages offer **flexibility** but at the cost of **potential runtime errors***.

- Statically typed languages **enforce a fixed variable type**.

&nbsp;

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

&nbsp;

## Variable Naming Conventions

1. Variable names should be **descriptive** and **meaningful**.

    - it is best to **keep variable names readable** by using letters, numbers, underscores, or dollar signs.

2. They **cannot** start with a `number`. They must begin with a `letter`, an underscore (`_`), or a dollar sign (`$`).

    ```javascript

    // invalid variable name
    let 1stPlace;   // starts with a number

    let age;
    let _score;
    let $total;
    ```

3. Variable names should **not** contain **spaces** or **special characters**, except for `_` and `$`.

    - **Do not** use special characters like, exclamation points (`!`), or at (`@`) symbols in your variable names. 

4. Variable names should be `camelCase` like `cityName`, `isLoggedIn`, and `veryBigNumber`.

    - in JavaScript, variable names are `case-sensitive`, meaning the word `age` in all _lowercase_ and the word `Age` with a capital `A` are considered **different** *variables*.

      ```javascript
      let age = 25;
      let Age = 30;
      console.log(age); // 25
      console.log(Age); // 30
      ```

    - This is why it's **important** to stick with a consistent naming convention like `camelCase`. camelCase is where the **first word** is all **lowercase** and each **subsequent** word starts with **an uppercase** letter.

      ```javascript

      let thisIsCamelCase;
      let anotherExampleVariable;
      let freeCodeCampStudents;
      ```

5. Variable names should **not** be **reserved keywords**.

   - There are certain keywords in JavaScript that you **cannot** use as _variable_ names, such as `let`, `const`, `function`, or `return`, as they are reserved for the language *itself*.

&nbsp;

### `let`

- The `let` keyword allows you to declare variables that can be updated or reassigned later.

  ```javascript
  let score = 10;
  console.log(score); // 10
  score = 20;
  console.log(score); // 20
  ```

&nbsp;

### `const`

- const is used to declare variables that are **constant**.

- Once you assign a value to a variable declared with const, you **cannot reassign** it.

This makes const *ideal* for values that **you don't want to change accidentally**, or otherwise, during the execution of the program.

```javascript

const MAX_SIZE = 100;
console.log(MAX_SIZE); // 100

// Once MAX_SIZE is assigned the value 100, it cannot be changed.

MAX_SIZE = 200; // This will result in an error
```

- Variables declared with `const` must be assigned a value at the time of declaration. 

  ```javascript

  const PI; // Error: Missing initializer in const declaration
  ```

- Use const when you want to declare variables that should **remain constant**, like **configuration values** or **settings** that shouldn't be changed *accidentally**

`Note`: You can also use the `var` keyword, but it's **not as recommended anymore**. The `var` is kind of like `let`, except it has a **wider scope**, which is more likely to **cause problems*** in your *program*.

&nbsp;

## "Strings"

1. Strings are **sequences of characters** enclosed in **quotes**. They can be created using *single quotes* and *double quotes*.

    ```js
    let correctWay = 'This is a string';
   let alsoCorrect = "This is also a string";
   ```

2. `Strings` are **immutable**. 

    - This means that once a string is *created*, you **cannot change the characters** in the string. However, you can still **reassign strings** to a *new value*.

      ```js
      let firstName = "Sam";
      firstName = "Sammy"; // Reassigning the string to a new value
      ```

&nbsp;

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
  let firstName = "John";
  let lastName = "Doe";
  let fullName = firstName.concat(" ", lastName);
  console.log(fullName); // John Doe
  ```
&nbsp;

## Working w/ "Strings" 

In JavaScript, strings are treated as sequences of characters, and `each character` in a string can be accessed using bracket notation (`[]`). This allows you to retrieve a specific character from a string based on its **position**, which is called its `index`.

- An **index** is the **position of a character within a string**, and it is `zero-based`. This means that the **first character** of a string has an index of `0`, the **second** character has an index of `1`, and so on...

- For example, in the string `hello`, the character `h` is at index `0`, `e` is at index `1`, `l` is at index `2`, and so on...

    ```js
    let greeting = "hello";
    console.log(greeting[1]); // "e"
    ```

- The `length` property of a string tells you **how many characters it contains**, so to access the last character, you would subtract one from the length. 

  - in this case, the `length` of `hello` is `5`, and the last character (`o`) is at index `4` which is `5 - 1`.

    ```js
    let greeting = "hello";
    console.log(greeting[greeting.length - 1]); // "o"
    ```

&nbsp;

## Escape Sequence Characters

### New line (`\n`)
- in many programming languages, including JavaScript, you can create **a newline in a string** using a special character called an `escape sequence`. The most common escape sequence for *newlines* is `\n`.

  ```js
  /**
   "Roses are red,
  Violets are blue,
  JavaScript is fun,
  And so are you." 
   **/
  let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
  console.log(poem);
  ```

### inner Quote (`\"`)

```js
let statement = "She said, "Hello!""; //This will throw an error.(

let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"
```

### Single Quote (`\'`)

```js
let quote = 'It\'s a beautiful day!';
console.log(quote); // It's a beautiful day!
```

`Note`: The backslash (`\`) tells JavaScript to treat the *quotes* as **literal characters**, so they appear correctly in the output.

&nbsp;

## Template Literals

Unlike regular strings, which use single (`'`) or double (`"`) quotes, &**template literals** are defined with *backticks* **( ` )**.

&nbsp;

## A Semicolon (`;`)

Semicolons are primarily used to **mark the end of a statement**. This helps the JavaScript engine understand **the separation of individual instructions**, which is crucial for correct execution and termination.

- Semicolons help **delineate statements**, and improve *code readability* and *reliability**.

  ```js
  let message = "Hello, World!"; // first statement ends here
  let number = 42; // second statement starts here
  ```

Just as a period (`.`) marks the **end of a sentence** in *English*, a semicolon (`;`) signifies the **end of an executable line of code** in *JavaScript*.

- This allows the JavaScript engine to distinguish between separate commands.

Without the semicolon, the JavaScript engine *might** have trouble interpreting where one statement ends and another begins.

- Semicolons help **prevent ambiguities** in code execution and ensure that statements are *correctly terminated*.

`Note`: While JavaScript has Automatic Semicolon Insertion (**ASI**) that can add semicolons automatically, explicitly including them improves code clarity and helps prevent errors that may arise from *unexpected* ASI behavior.

&nbsp;

## Comments in JavaScript

Any line of code that is *commented* out is **ignored** by the JavaScript engine. Comments are used to **explain code**, **make notes**, **documentation**, or **temporarily disable code**.

- They are there solely for the benefit of people **reading the code**, whether that's you or someone else.

- The comment provides important context for why "this" code *exists*.

### Single line (`//`)

```js
// I am a single line comment in JavaScript
```

### Multi-line (`/* */`)

```js
/*
 I am a multiline comment.
 This is helpful for longer explanations.
*/
```

While comments are **useful** in programming, it is important to **avoid over-commenting**. You don't need to comment on every single line of code, especially if the code is straightforward and self-explanatory.

`Note`: The goal is to **enhance readability**, **do not clutter** the code with *unnecessary* explanations.

&nbsp;

## Data Types in JavaScript

- `Number`: A number represents both **integers** and **floating-point** values. 

  - Examples of integers include 7, 19, and 90.

- **Floating point**: A floating point number is a number with a **decimal** point. 

  - Examples include 3.14, 0.5, and 0.0001.

  - in JavaScript, there isn't a *dedicated* Float data type. instead, all numbers, including both **integers** and **floating-point** numbers, are *represented* by a single `Number` type.

- `String`: A string is a **sequence of characters**, or **text**, enclosed in **quotes**. 

  - `"I like coding"` and `'JavaScript is fun'` are examples of strings.


- `Boolean`: A boolean represents one of two possible values: `true` or `false`. 

  - To represent a condition, such as `isLoggedIn = true`.

- `Undefined`: An undefined value is a variable that has been declared but **not assigned** a value. 

- `Null`: A value is an `empty` value, or a variable that has `intentionally` been assigned a value of null.

- `Object`: An object is a collection of **key-value** pairs. The key is the property *name*, and the value is the property *value*.

    - Here, the `pet` object has three properties or **keys**: `name`, `age`, and `type`. The values are `Fluffy`, `3`, and `dog`, respectively.

      ```js
      let pet = {
      name: "Fluffy",
      age: 3,
      type: "dog"
      };
      ```

- `Symbol`: The Symbol data type is a **unique** and **immutable** value that may be used as an **identifier** for object properties.

    - in this example below, two symbols are created with the **same description**, but they are **not equal**.

      ```js
      const crypticKey1 = Symbol("saltNpepper");
      const crypticKey2 = Symbol("saltNpepper");
      console.log(crypticKey1 === crypticKey2); // false
      ```

- `BigInt`: When the number is **too large** for the `Number` data type, you can use the `BigInt` data type to represent **integers of arbitrary length**.

    - By adding an `n` to the end of the number, you can create a BigInt.

      ```js
      const veryBigNumber = 1234567890123456789012345678901234567890n;
      ```

&nbsp;

## Using the `typeof` Operator

The typeof operator is used to **check the data type of a variable**. it returns a *string* indicating the *type* of the variable.

```js
let age = 25;
console.log(typeof age); // "number"

let isLoggedIn = true;
console.log(typeof isLoggedIn); // "boolean"
```

- However, there's a well-known "*quirk*"/*bug* in JavaScript when it comes to `null`. The `typeof` operator returns `"object"` for `null` values.

  ```js
  let user = null;
  console.log(typeof user); // "object"
  ```

  When the language was first implemented, values like `null` were represented as a **"special" type of object**, leading to this *unexpected* result.

  *Unfortunately*, this has become **a part of the language**, and while it's confusing, it's something **you'll need to be aware of**.(

&nbsp;

## 