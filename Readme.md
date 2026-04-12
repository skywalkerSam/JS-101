# [JavaScript](https://www.freecodecamp.org/learn/javascript-v9/) Notes

w/ freeCodeCamp.org

- **immutability** means that once something is *created*, it **cannot be changed**.

- A `function()` is a reusable block of code that performs a specific task and can be called with various inputs.

- A `method` is a *type of function* that is associated with an `object`, meaning it operates on the data contained *within that object*.

- An `argument` is a `value` you give to a `function` or `method` when you call it, **enabling that function or method** to perform its task using the **specific information you provide**.  

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

## `let`

- The `let` keyword allows you to declare variables that can be updated or reassigned later.

  ```javascript
  let score = 10;
  console.log(score); // 10
  score = 20;
  console.log(score); // 20
  ```

&nbsp;

## `const`

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

A string is a **sequence of characters** wrapped in either **single quotes** (`''`), **double quotes** (`""`) or **backticks** (``).

- Strings are **primitive** data types, and they are **immutable**.

  ```js
  let correctWay = 'This is a string';
  let alsoCorrect = "This is also a string";
  ```

- **immutability** means that once a string is **created**, you **cannot change the characters** in the string. However, you can still **reassign strings** to a *new value*.

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

### `\n` (Newline Character)
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
&nbsp;

### Escaping String: `\"` (inner Quote)

```js
let statement = "She said, "Hello!""; //This will throw an error.(

let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"
```
&nbsp;

### Escaping String: `\'` (Single Quote)

```js
let quote = 'It\'s a beautiful day!';
console.log(quote); // It's a beautiful day!
```

`Note`: The backslash (`\`) tells JavaScript to treat the *quotes* as **literal characters**, so they appear correctly in the output.

&nbsp;

## Template Literals (``) & String interpolation (`${}`)

Template Strings are defined with backticks (``). They allow for **easier string manipulation**, including **embedding variables and expressions** directly inside a *string*, a feature known as ***string interpolation***.

```js
const name = "Alice";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;

console.log(message); 
```

- Supports **multi-line** strings.

  - With **regular strings**, you would need to use escape characters (`\n`) to create new lines. With **template literals**, you can simply write the string across multiple lines, and the **formatting is preserved**: 

  ```js
  let poem = `Roses are red,
  Violets are blue,
  JavaScript is fun,
  And so are you.`;

  console.log(poem);
  ```

- A **powerful** and **flexible** way to work with strings.

  - Embed **JavaScript expressions directly within the string**, like in this example:

  ```js
  const song = "Bohemian Rhapsody";
  const score = 9.5;
  const highestScore = 10;
  const output = `One of my favorite songs is "${song}". I rated it ${
    (score / highestScore) * 100
  }%.`;

  console.log(output); 
  ```

&nbsp;

## `indexOf()`

To **locate** the position of a **substring** inside of a *string*. it returns the **initial position** of the string starting with the index of `0`.
```js
let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");

console.log(position); // 14
```
- if the substring is **not found**, `indexOf()` returns `-1`.

  ```js
  let sentence = "JavaScript is awesome!";
  let position = sentence.indexOf("fantastic");

  console.log(position); // -1
  ```

- You can also specify **where to begin** searching within the string by providing a **second argument** to `indexOf()`.

  ```js
  let sentence = "JavaScript is awesome, and JavaScript is powerful!";
  let position = sentence.indexOf("JavaScript", 10);

  console.log(position); // 27
  ```

- The `indexOf()` method is **case sensitive**.

  ```js
  console.log("freeCodeCamp".indexOf("F")) // -1
  ```

&nbsp;

## `includes()` method

The `includes()` method is used to check **if a string contains a specific substring**. If the substring is found within the string, the method returns `true` otherwise, it returns `false`.

- **Case-sensitive**

```js
let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result);  // true

let phrase = "JavaScript is awesome!";
let result = phrase.includes("Awesome");

console.log(result);  // false
```

- You can also use the `includes()` method to check for a substring starting at a specific `index` in the string by providing a second parameter:

  ```js
  let text = "Hello, JavaScript world!";
  let result = text.includes("JavaScript", 7);

  console.log(result);  // true
  ```

&nbsp;

## `slice()` method

The `slice()` method allows you to **extract a portion of a string** and **returns a new string**, without modifying the original string. 

- it takes two parameters: the **starting** index and the *optional* **ending** index.

  ```js
  string.slice(startIndex, endIndex);
  ```

```js
let message = "Hello, world!";
let greeting = message.slice(0, 5);

console.log(greeting);  // Hello
```

- if you **omit the second parameter**, `slice()` will extract everything **from the start index to the end** of the string:

  ```js
  let message = "Hello, world!";
  let world = message.slice(7);

  console.log(world);  // world!
  ```

- You can also use **negative numbers as indexes**. When you use a negative number, it **counts backward from the end** of the string:

  ```js
  let message = "JavaScript is fun!";
  let lastWord = message.slice(-4);

  console.log(lastWord);  // fun!
  ```

&nbsp;

## `toUpperCase()`

The `toUpperCase()` method **converts all the characters to uppercase** letters and **returns a new string** with all uppercase characters.

```js
let greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();

console.log(uppercaseGreeting);  // "HELLO, WORLD!"
```

&nbsp;

## `toLowerCase()`

The `toLowerCase()` method **converts all characters in a string to lowercase**. 

- Standardize input, such as when comparing **user-provided** text or making **case-insensitive** checks.

```js
let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();

console.log(lowercaseShout);  // "i am learning javascript!"
```

&nbsp;

## Trim Whitespace from a String


When working with strings in JavaScript, it's common to encounter **unwanted whitespace** at the beginning or end of a string. Whitespace can **interfere with operations** like **comparison**, **storage**, or **display**,

- Whitespace refers to **spaces**, **tabs**, or **line breaks** that occur in a string but are **not visible characters**.

&nbsp;

### `trim()`

The `trim()` method is the most commonly used way to **remove whitespace** from both **the beginning** and **the end** of a string.

- Removes all the leading and trailing spaces.

```js
let message = "   Hello!   ";
console.log(message); // "   Hello!   "

let trimmedMessage = message.trim();
console.log(trimmedMessage);  // "Hello!"
```

`Note`: Any whitespace **within the string** (*between words*) is left **untouched** by `trim()`.

&nbsp;

### `trimStart()`

`trimStart()` removes whitespace from the **beginning** (*start*) of the string.

```js
let greeting = "   Hello!   ";
console.log(greeting);  // "   Hello!   "

let trimmedStart = greeting.trimStart();
console.log(trimmedStart);  // "Hello!   "
```

&nbsp;

### `trimEnd()`

`trimEnd()` removes whitespace from the **end of the string**.

```js
let greeting = "   Hello!   ";
console.log(greeting);  // "   Hello!   "

let trimmedEnd = greeting.trimEnd();
console.log(trimmedEnd);  // "   Hello!"
```

&nbsp;

## `replace()` method

The `replace()` method in JavaScript allows you to **find** a specified value (like a **word** or **character**) in a string and **replace** it with another value. The method **returns** a *new string* with the replacement and leaves the original unchanged.

```js
string.replace(searchValue, newValue);
```

- Case-sensitive

- `searchValue` is the value you want to *search* for in the string. It can be either a **string** or a regular expression (**regex**), which describes patterns in text.

- The `newValue` is the value that will **replace** the `searchValue`.

  ```js
  let text = "I love JavaScript!";
  console.log(text); // "I love JavaScript!"

  let newText = text.replace("JavaScript", "Elixir");
  console.log(newText);  // "I love Elixir!"
  ```

`Note`: By default, the `replace()` method will only **replace the first occurrence** of the `searchValue`.

&nbsp;

### `replaceAll()` method

it replaces all of the occourences of the `searchValue`.

&nbsp;

## `repeat()` method

The `repeat()` method is a built-in function in JavaScript that allows you to **repeat a string a specified number of times**. it is used for **string duplication**.

```js
string.repeat(count);
```

- `string` is the string that you want to **repeat**, and `count` is the *number of times* you want the string to be repeated.

  ```js
  let word = "Hello!";
  let repeatedWord = word.repeat(3);
  console.log(repeatedWord);  // "Hello!Hello!Hello!"
  ```

- The `count` parameter must be a **non-negative** number. if you pass a negative number, JavaScript will throw a `RangeError`.

  ```js
  let word = "Test";
  console.log(word.repeat(-1));  // Throws RangeError: Invalid count value
  ```

- The `count` must be a **finite** number. if you try to repeat a string an ***infinite*** number of times or use `Infinity` as the count, you will also get a `RangeError`.

  ```js
  let word = "Test";
  console.log(word.repeat(Infinity));  // Throws RangeError: Invalid count value
  ```

  - in JavaScript, `Infinity` is a special value that represents an **infinite quantity**. it is used to denote numbers that are *larger than any finite number*.

- if the count is **not an integer** (such as a *decimal* like `2.5`), the `repeat()` method will **round** it down to the nearest integer.

  ```js
  let word = "Test";
  console.log(word.repeat(2.5));  // "TestTest"
  ```

- if you pass `0` as the `count`, the `repeat()` method will return an empty string (`""`).

&nbsp;

## `prompt()` method

One of the simplest ways to **get input from a user** through a small **pop-up dialog** box.

```js
prompt(message, default);
```

- Basic Example

  ```js
  const btn = document.getElementById("prompt-btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", () => {
    const userName = prompt("What is your name?", "User");
    output.textContent = "Hello, " + userName + "!";
  });
  ```
  - Returns the input as a **string**.

  - `null` signifies that the user **did not** provide any **input**. 

  - `prompt()` method will **halt the execution** of the script **until the user interacts** with the *dialog box*.

&nbsp;

`Note`: While `prompt()` is useful for **quick testing** or **small applications**, it's generally **avoided** in modern, complex web applications due to its **disruptive nature** and **inconsistent behavior** across different *browsers*.

&nbsp;

## American Standard Code for Information Interchange (`ASCII`)

ASCII is **a system for encoding characters** such as letters, digits, and symbols into **numerical** values. 

- Each **character** is mapped to a **specific** number.

- For example, `A` is represented by the number `65`, while `a` is represented by `97`.

- JavaScript strings use Unicode (`UTF-16`) internally, ASCII values match the first `128` Unicode characters.

  - Uppercase and lowercase English letters (`A-Z`, `a-z`).
  - Numbers (`0-9`).
  - Common punctuation marks and symbols (`!`, `@`, `#`, and *so on*).
  - Control characters (such as **newline** and **tab**). 

in JavaScript, you can access the **numeric code of a character** using the `charCodeAt()` method. This method **returns the UTF-16 code** unit of the character at a specified **index**. For the first `128` *characters*, this value matches the ASCII code.

```js
let letter = "A";
console.log(letter.charCodeAt(0));  // 65
```

The `fromCharCode()` method allows you to do the **opposite**: convert a **UTF-16** code unit (which matches ASCII for basic characters) into its **corresponding character**.

```js
let char = String.fromCharCode(65);
console.log(char);  //  A

let char = String.fromCharCode(97);
console.log(char);  // a
```

`Note`: These methods are particularly useful when you need to **manipulate or compare characters based on their numeric code values**.

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

&nbsp;

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

&nbsp;

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

## `typeof` Operator

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

## Number

The `Number` data type represents a **numeric** value. JavaScript uses one unified `Number` type to account for numbers. 

```js
const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number
```

- JavaScript's `Number` type includes various kinds of numeric values, ranging from simple **integers** and **floating-point** numbers to special cases like `Infinity` and `NaN`.

  - JavaScript can represent numbers that are beyond the maximum limit with `Infinity`. it comes up when **dividing a number by zero** or **exceeding the upper boundary** of the `Number` type.

    ```js
    const infiniteNumber = 1 / 0;
    console.log(infiniteNumber); // Infinity
    console.log(typeof infiniteNumber); // number
    ```

  - in JavaScript, some mathematical operations **don't result in a valid number**, i.e., why `NaN`, which stands for "Not a Number".

    ```js
    const notANumber = 'hello world' / 2;
    console.log(notANumber); // NaN
    console.log(typeof notANumber); // number
    ```

&nbsp;

`Note`: Apart from the **standard decimal system** (`base 10`), JavaScript also **supports** numbers in different bases such as *binary*, *octal*, and *hexadecimal*. **Binary** is a `base-2` system that uses only digits `1` and `0`. **Octal** is a `base-8` system that uses only digits `0 to 7`. **Hexadecimal** is a `base-16` system that uses digits `0 to 9` and letters `a to f`, like you see in CSS *hex* colors.

&nbsp;

## Arithmetic Operators

JavaScript provides tools to perform basic *arithmetic operations* on numbers, such as **addition** (`+`), **subtraction** (`-`), **multiplication** (`*`), and **division** (`/`). 

- JavaScript also includes operators for more *complex* arithmetic operations, such as **remainder** (`%`) and **exponentiation** (`**`).

&nbsp;

`Note`: When you mix different operators in a single expression, the JavaScript engine follows a system called operator precedence to determine the order of operations. **Operator precedence determines the order in which operations are executed** in expressions.

&nbsp;

## Calculations with `Numbers` and `Strings`

JavaScript is a language where things sometimes work in surprising, or even **weird**, ways. One such surprise occurs when you **mix numbers and strings** in calculations. 

- **Type coercion** is when a value from one data type is converted into another.

&nbsp;

### Number + String = String concatenation

in JavaScript, the `+` operator does **double duty**. It handles both **addition** and **string concatenation**.

```js
const result = 5 + '10';

console.log(result); // 510
console.log(typeof result); // string
```

- When you try to perform other arithmetic operations like **subtraction**, **multiplication**, or **division** with **a string and number**. In these cases, JavaScript tries to convert the string into a **number** before doing the math – another type coercion!

  ```js
  const subtractionResult = '10' - 5;
  console.log(subtractionResult); // 5
  console.log(typeof subtractionResult); // number

  const multiplicationResult = '10' * 2;
  console.log(multiplicationResult); // 20
  console.log(typeof multiplicationResult); // number

  const divisionResult = '20' / 2;
  console.log(divisionResult); // 10
  console.log(typeof divisionResult); // number
  ```

- But what if the **string isn't a number**? (`NaN`)

  ```js
  const subtractionResult = 'abc' - 5;
  console.log(subtractionResult); // NaN
  console.log(typeof subtractionResult); // number

  const multiplicationResult = 'abc' * 2;
  console.log(multiplicationResult); // NaN
  console.log(typeof multiplicationResult); // number

  const divisionResult = 'abc' / 2;
  console.log(divisionResult); // NaN
  console.log(typeof divisionResult); // number
  ```

  - in the examples above, the string `'abc'` does not represent a valid numeric value, so JavaScript cannot convert it into a **meaningful number**. When such **conversion fails**, JavaScript returns `NaN`, which stands for "*Not a Number*".

- JavaScript treats **booleans as numbers** in mathematical operations: `true` becomes `1`, and `false` becomes `0`.

  ```js
  const result1 = true + 1;
  console.log(result1); // 2
  console.log(typeof result1); // number

  const result2 = false + 1;
  console.log(result2); // 1
  console.log(typeof result2); // number

  const result3 = 'Hello' + true;
  console.log(result3); // "Hellotrue"
  console.log(typeof result3); // string
  ```

- JavaScript treats `null` as `0` and `undefined` as `NaN` in mathematical operations.

  ```js
  const result1 = null + 5;
  console.log(result1); // 5
  console.log(typeof result1); // number

  const result2 = undefined + 5;
  console.log(result2); // NaN
  console.log(typeof result2); // number
  ```

&nbsp;

`Note`: JavaScript often performs **type coercion**, *automatically* converting data types such as numbers, strings, and booleans in sometimes **unexpected ways**. 

&nbsp;

## Operator Precedence

Operator precedence determines **the order in which operations are evaluated** in an expression. Think of operator precedence like in **mathematics**, where division and multiplication happen before addition and subtraction.

- Operators with **higher** precedence are evaluated before those with **lower** precedence.

  ```js
  const result = 2 + 3 * 4;
  console.log(result); // 14

  const result = 2 + 6 / 3;
  console.log(result); // 4
  ```

- Similar to mathematics, you can use parentheses `()` around certain parts of your expression to run *first*, **regardless of precedence** rules.

  ```js
  const result = (2 + 3) * 4;
  console.log(result); // 20
  ```

- **Associativity** is what tells JavaScript whether to evaluate operators from **left to right** or **right to left**. 
  
  - For most operators like **addition** and **multiplication**, associativity is ***left to right***.

    ```js
    const result = 10 - 2 + 3;
    console.log(result); // 11
    ```

  - Some operators, like assignment (`=`), are **right-to-left** associative. This means the right side of the expression gets evaluated first.

    ```js
    let a, b;
    a = b = 5;

    console.log(a); // 5
    console.log(b); // 5
    console.log(a + b); // 10
    ```

  - The exponent operator (`**`) is also **right-to-left** associative.

    ```js
    const result = 2 ** 3 ** 2;
    console.log(result); // 512
    ```

&nbsp;

## increment and Decrement Operators

The increment and decrement operators are represented by `++` and `--`, respectively. They both allow you to adjust the value of a variable by `1`.

- instead of writing something like `x = x + 1` or `x = x - 1`, you can simply use `x++` to add `1`, or `x--` to subtract `1`. 

  - it's faster, cleaner, and easier to read.

- **Prefix** & **Postfix**

  - Prefix (`++x`) **increases** the value of the variable **first**, then returns a new value.

    ```js
    let x = 5;

    console.log(++x); // 6
    console.log(x); // 6
    ```

  - Postfix (`x++`) **returns** the current value of the variable **first**, then increases it.

    ```js
    let y = 5;

    console.log(y++); // 5
    console.log(y); // 6
    ```

&nbsp;

`Note`: So, if you **need the updated value right away**, use **prefix**. If you **want the current value first** and you don’t care about the **increment** until **later**, go with **postfix**.

&nbsp;

## Compound Assignment Operators

Compound assignment operators provide a concise **shorthand** for an operation on a variable followed by storing the result in that **same variable**. They combine the **operation and assignment** into a shorter form like `x += y`, which is equivalent to writing `x = x + y` but **without repeating the variable name**. 

- The **addition assignment operator** (`+=`) takes the current value of the variable, adds the specified number to it, and then assigns the result back to the variable.

  ```js
  let total = 10;
  total += 5;

  console.log(total); // 15
  ```

  - There's a **subtraction** assignment operator (`-=`)

  - The **multiplication** assignment operator (`*=`)

  - Lastly, there's a **division** assignment operator (`/=`)

- There's a compound assignment operator for every operator in JavaScript. So, apart from the four already mentioned, we also have...

    - **Remainder assignment** operator (`%=`), which divides a variable by the specified number and assigns the remainder to the variable.

    - **Exponent assignment** operator (`**=`), which raises a variable to the power of the specified number and reassigns the result to the variable.

    - **Bitwise AND assignment** operator (`&=`), which performs a bitwise AND operation with the specified number and reassigns the result to the variable.

    - **Bitwise OR assignment** operator (`|=`), which performs a bitwise OR operation with the specified number and reassigns the result to the variable.

&nbsp;

## Booleans, Equality and inequality Operators

Booleans are a data type with only `true` and `false` values. They're useful because they allow you to do something based on some **conditions**.

- To compare two values, you can use either the equality (`==`) or strict equality (`===`) operator. The result of the comparison will be a boolean of either `true` or `false`.

```js
// equality: performs type coercion
console.log(5 == "5"); // true

// strict equality
console.log(5 === '5'); // false

// inequality
console.log(5 != "5"); // false

// strict inequality
console.log(5 !== "5"); // true
```

  - Type coercion converts the **string** value to a **number** and then *compares* the values.

&nbsp;

`Note`: it is considered best practice to **use strict** inequality and equality operators whenever possible, as *they do not perform type coercion*. it checks both **value** and **type**, providing more *predictable* results.

&nbsp;

## Comparison Operators

Comparison operators allow you to **compare two values** and return a `true` or `false` result. You can then use the result to make a decision or control the flow of your program.

- The greater than operator (`>`), checks if the value on the *left* is **greater** than the one on the *right*.

  ```js
  let a = 6;
  let b = 9;

  console.log(a > b); // false
  console.log(b > a); // true
  ```

- The greater than or equal operator (`>=`), checks if the value on the *left* is **either greater than or equal** to the one on the *right*.

  ```js
  let a = 6;
  let b = 9;
  let c = 6;

  console.log(a >= b); // false
  console.log(b >= a); // true
  console.log(a >= c); // true
  ```

- The lesser than operator (`<`) checks if the value on the *left* is **smaller** than the one on the *right*.

  ```js
  let a = 6;
  let b = 9;

  console.log(a < b); // true
  console.log(b < a); // false
  ```

- The less than or equal operator (`<=`) checks if the value on the *left* is **smaller than or equal** to the one on the *right*.

  ```js
  let a = 6;
  let b = 9;
  let c = 6;

  console.log(a <= b); // true
  console.log(b <= a); // false
  console.log(a <= c); // true
  ```

&nbsp;

## Unary Operators

Unary operators act on a **single operand to perform operations** like **type conversion**, **value manipulation**, or checking certain **conditions**.


- The **unary plus** operator **converts its operand into a number**. If the operand is already a number, it remains unchanged.

  - Unary plus is handy when you want to **make sure** you're working with **a numeric value**.

  ```js
  const str = '42';
  const strToNum = +str;

  console.log(strToNum); // 42
  console.log(typeof str); // string
  console.log(typeof strToNum); // number
  ```

- The **unary negation operator** works the same as plus, except it **negates the value** of the operand. in other words, it **flips the sign** from `+` to a `-`.

  ```js
  const str = '42';
  const strToNegativeNum = -str;

  console.log(strToNegativeNum); // -42
  console.log(typeof str); // string
  console.log(typeof strToNegativeNum); // number
  ```

- The **logical NOT** operator, represented by an exclamation mark (`!`), is another unary operator. it **flips the boolean value** of its operand. So, if the operand is `true`, it becomes `false`, and if it's `false`, it becomes `true`. 

  ```js
  let isOnline = true;
  console.log(!isOnline); // false

  let isOffline = false;
  console.log(!isOffline); // true
  ```

- The `void` keyword is a unary operator that **evaluates an expression** and **returns** `undefined`.

  ```js
  const result = void (2 + 2);

  console.log(result); // undefined
  ```

  - `void` is also commonly used in *hyperlinks* to **prevent navigation**.

    ```js
    <a href="javascript:void(0);">Click Me</a>
    ```

- The `typeof` operator **returns the type** of its operand as a **string**.

  ```js
  const value = 'Hello world';

  console.log(typeof value); // string
  ```

- The **bitwise NOT** operator (`~`) **inverts the binary representation of a number**. Computers store numbers in binary format (1s and 0s). The `~` operator **flips every bit**, meaning it changes all **1s to 0s** and all **0s to 1s**. 

  ```js
  const num = 5; // The binary for 5 is 00000101

  console.log(~num); // -6
  ```

  - in this example, `5` became `-6` because by applying the  `~` operator to `5`, you get `- (5 + 1)`, which equals `-6` due to two's complement representation. Two's complement is a way computers represent negative numbers in binary. You probably won't use the bitwise NOT often unless you're working with low-level programming tasks like **manipulating bits directly**.

&nbsp;

## Bitwise Operators

Bitwise operators in JavaScript are special operators that **work on the binary representation of numbers**.

- A **bit** is the most basic unit of information.

  - it can have only two values: `0` or `1`. 

- **Binary** is a **number system** that uses only `0` and `1` to represent all numbers.

  - in binary, each digit represents a **power of** `2`, *starting* from the **rightmost** digit and *increasing* as we move **left**.

    ```
    - 10 in binary is 1010
    
    1              0               1               0
    1*(2**3) = 8   0*(2**2) = 0    1*(2**1) = 2    0*(2**0) = 0   => 8+0+2+0 = 10
    ```

- **Bitwise operators** perform **operations on the binary representation** of numbers.

  - The bitwise **AND** (`&`) operator **returns** a `1` in each bit position for which the corresponding bits of both operands are `1`.

    ```js
    let a = 5;  // Binary: 101
    let b = 3;  // Binary: 011
    console.log(a & b);  // 1 (Binary: 001)
    ```

  - The bitwise **OR** (`|`) operator **returns** a `1` in each bit position for which the corresponding bits of either or both operands are `1`.

    ```js
    let a = 5;  // Binary: 101
    let b = 3;  // Binary: 011
    console.log(a | b);  // 7 (Binary: 111)
    ```

  - The bitwise **XOR** (`^`) operator **returns** a `1` in each bit position for which the corresponding bits of either, but not both, operands are `1`.

    ```js
    let a = 5;  // Binary: 101
    let b = 3;  // Binary: 011
    console.log(a ^ b);  // 6 (Binary: 110)
    ```

  - The bitwise **NOT** (`~`) operator **inverts** all the **bits** of its operand.

    ```js
    let a = 5;  // Binary: 101
    console.log(~a);  // -6
    ```

    - This might seem surprising, but it's because of how negative numbers are represented in binary using two's complement.
    
  - The left shift (`<<`) operator **shifts** all bits to the **left** by a specified number of positions.

    ```js
    let a = 5;  // Binary: 101
    console.log(a << 1);  // 10 (Binary: 1010)
    ```

    - Here, all bits are shifted one position to the left, effectively **multiplying** the number by `2`.
    

  - The right shift (`>>`) operator **shifts** all bits to the **right**.

    ```js
    let a = 5;  // Binary: 101
    console.log(a >> 1);  // 2 (Binary: 10)
    ```

    - Here, all bits are shifted one position to the right, effectively **dividing** the number by `2` and rounding down.

&nbsp;

`Note`: Bitwise operators are often used in **low-level programming** and **cryptography**. While they may not be as commonly used in everyday JavaScript programming, understanding them can be beneficial for certain **specialized tasks** and can deepen your understanding of **how computers work at a fundamental level**.

&nbsp;

## Conditional Statements








&nbsp;
