# [introduction To JavaScript](https://www.freecodecamp.org/learn/javascript-v9/)

w/ freeCodeCamp.org

- **immutability** means that once something is _created_, it **cannot be changed**.

- A `function()` is a reusable block of code that performs a specific task and can be called with various inputs.

- A `method` is a _type of function_ that is associated with an `object`, meaning it operates on the data contained _within that object_.

- An `argument` is a `value` you give to a `function` or `method` when you call it, **enabling that function or method** to perform its task using the **specific information you provide**.

- A **compiler** translates high-level programming language code into **machine-readable** code, which creates an **executable** file.

&nbsp;

## JavaScript is a Dynamically Typed Language

it means that **you don't have to specify the data type of a variable** when you declare it. The JavaScript engine **automatically determines** the data type based on the value assigned to the variable **during execution**.

```js
let error = 404; // JavaScript treats error as a number
error = "Not Found"; // JavaScript now treats error as a string
```

`Note`: The **flexibility** of **dynamic typing** makes JavaScript more **forgiving** and easy to work with for **quick scripting**, but it can also introduce **"bugs"** that may be **harder to catch**, especially as your program grows larger\*

### Statically Typed Languages

in **statically typed** languages like `C#` or `C++`, **you must declare the data type of a variable when you create it**, and that type **cannot** be _changed_.

- Other languages, like `C#`, that are **not dynamically typed** would result in an error:

  ```c
  int error = 404; // value must always be an integer
  error = "Not Found"; // This would cause an error in C#
  ```

`Note`: Statically typed languages enforce **stricter rules** that can **prevent certain errors before the program runs**, but they **require more upfront declaration** and offer **less flexibility** in changing _types_.

### Dynamic vs. Static

- The difference between dynamic typing and static typing lies in the **flexibility vs. the safety of your code**.

- Dynamically typed languages offer **flexibility** but at the cost of **potential runtime errors\***.

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
  console.log(go); // null
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
   - in JavaScript, variable names are `case-sensitive`, meaning the word `age` in all _lowercase_ and the word `Age` with a capital `A` are considered **different** _variables_.

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
   - There are certain keywords in JavaScript that you **cannot** use as _variable_ names, such as `let`, `const`, `function`, or `return`, as they are reserved for the language _itself_.

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

This makes const _ideal_ for values that **you don't want to change accidentally**, or otherwise, during the execution of the program.

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

- Use const when you want to declare variables that should **remain constant**, like **configuration values** or **settings** that shouldn't be changed \*accidentally\*\*

`Note`: You can also use the `var` keyword, but it's **not as recommended anymore**. The `var` is kind of like `let`, except it has a **wider scope**, which is more likely to **cause problems\*** in your _program_.

&nbsp;

## "Strings"

A string is a **sequence of characters** wrapped in either **single quotes** (`''`), **double quotes** (`""`) or **backticks** (``).

- Strings are **primitive** data types, and they are **immutable**.

  ```js
  let correctWay = "This is a string";
  let alsoCorrect = "This is also a string";
  ```

- **immutability** means that once a string is **created**, you **cannot change the characters** in the string. However, you can still **reassign strings** to a _new value_.

  ```js
  let firstName = "Sam";
  firstName = "Sammy"; // Reassigning the string to a new value
  ```

&nbsp;

## String Concatenation

### w/ `+`

- One disadvantage of using the `+` operator for string concatenation is that it can lead to **spacing issues** if you don't carefully manage the spacing between the concatenated strings.

- `+` operator is best for _simple concatenation_, especially when you need to combine a few strings or variables.

  ```javascript
  let firstName = "John";
  let lastName = "Doe";

  let fullName = firstName + lastName;
  console.log(fullName); // "JohnDoe"
  ```

### w/ `+=`

- if you need to **add or append** to an existing string, then you can use the `+=` operator.

- `+=` operator is useful when building up a string step by step or _appending_ new content to an existing string variable.

  ```javascript
  let greeting = "Hello";
  greeting += ", John!";

  console.log(greeting); // "Hello, John!"
  ```

### w/ `concat()`

- `.concat()` method is beneficial when you need to _concatenate multiple strings_ together.

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

- in many programming languages, including JavaScript, you can create **a newline in a string** using a special character called an `escape sequence`. The most common escape sequence for _newlines_ is `\n`.

  ```js
  /**
   "Roses are red,
  Violets are blue,
  JavaScript is fun,
  And so are you." 
   **/
  let poem =
    "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
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
let quote = "It's a beautiful day!";
console.log(quote); // It's a beautiful day!
```

`Note`: The backslash (`\`) tells JavaScript to treat the _quotes_ as **literal characters**, so they appear correctly in the output.

&nbsp;

## Template Literals (``) & String interpolation (`${}`)

Template Strings are defined with backticks (``). They allow for **easier string manipulation**, including **embedding variables and expressions** directly inside a _string_, a feature known as **_string interpolation_**.

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

To **locate** the position of a **substring** inside of a _string_. it returns the **initial position** of the string starting with the index of `0`.

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
  console.log("freeCodeCamp".indexOf("F")); // -1
  ```

&nbsp;

## `includes()` method

The `includes()` method is used to check **if a string contains a specific substring**. If the substring is found within the string, the method returns `true` otherwise, it returns `false`.

- **Case-sensitive**

```js
let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result); // true

let phrase = "JavaScript is awesome!";
let result = phrase.includes("Awesome");

console.log(result); // false
```

- You can also use the `includes()` method to check for a substring starting at a specific `index` in the string by providing a second parameter:

  ```js
  let text = "Hello, JavaScript world!";
  let result = text.includes("JavaScript", 7);

  console.log(result); // true
  ```

&nbsp;

## `slice()` method

The `slice()` method allows you to **extract a portion of a string** and **returns a new string**, without modifying the original string.

- it takes two parameters: the **starting** index and the _optional_ **ending** index.

  ```js
  string.slice(startIndex, endIndex);
  ```

```js
let message = "Hello, world!";
let greeting = message.slice(0, 5);

console.log(greeting); // Hello
```

- if you **omit the second parameter**, `slice()` will extract everything **from the start index to the end** of the string:

  ```js
  let message = "Hello, world!";
  let world = message.slice(7);

  console.log(world); // world!
  ```

- You can also use **negative numbers as indexes**. When you use a negative number, it **counts backward from the end** of the string:

  ```js
  let message = "JavaScript is fun!";
  let lastWord = message.slice(-4);

  console.log(lastWord); // fun!
  ```

&nbsp;

## `toUpperCase()`

The `toUpperCase()` method **converts all the characters to uppercase** letters and **returns a new string** with all uppercase characters.

```js
let greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();

console.log(uppercaseGreeting); // "HELLO, WORLD!"
```

&nbsp;

## `toLowerCase()`

The `toLowerCase()` method **converts all characters in a string to lowercase**.

- Standardize input, such as when comparing **user-provided** text or making **case-insensitive** checks.

```js
let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();

console.log(lowercaseShout); // "i am learning javascript!"
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
console.log(trimmedMessage); // "Hello!"
```

`Note`: Any whitespace **within the string** (_between words_) is left **untouched** by `trim()`.

&nbsp;

### `trimStart()`

`trimStart()` removes whitespace from the **beginning** (_start_) of the string.

```js
let greeting = "   Hello!   ";
console.log(greeting); // "   Hello!   "

let trimmedStart = greeting.trimStart();
console.log(trimmedStart); // "Hello!   "
```

&nbsp;

### `trimEnd()`

`trimEnd()` removes whitespace from the **end of the string**.

```js
let greeting = "   Hello!   ";
console.log(greeting); // "   Hello!   "

let trimmedEnd = greeting.trimEnd();
console.log(trimmedEnd); // "   Hello!"
```

&nbsp;

## `replace()` method

The `replace()` method in JavaScript allows you to **find** a specified value (like a **word** or **character**) in a string and **replace** it with another value. The method **returns** a _new string_ with the replacement and leaves the original unchanged.

```js
string.replace(searchValue, newValue);
```

- Case-sensitive

- `searchValue` is the value you want to _search_ for in the string. It can be either a **string** or a regular expression (**regex**), which describes patterns in text.

- The `newValue` is the value that will **replace** the `searchValue`.

  ```js
  let text = "I love JavaScript!";
  console.log(text); // "I love JavaScript!"

  let newText = text.replace("JavaScript", "Elixir");
  console.log(newText); // "I love Elixir!"
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

- `string` is the string that you want to **repeat**, and `count` is the _number of times_ you want the string to be repeated.

  ```js
  let word = "Hello!";
  let repeatedWord = word.repeat(3);
  console.log(repeatedWord); // "Hello!Hello!Hello!"
  ```

- The `count` parameter must be a **non-negative** number. if you pass a negative number, JavaScript will throw a `RangeError`.

  ```js
  let word = "Test";
  console.log(word.repeat(-1)); // Throws RangeError: Invalid count value
  ```

- The `count` must be a **finite** number. if you try to repeat a string an **_infinite_** number of times or use `Infinity` as the count, you will also get a `RangeError`.

  ```js
  let word = "Test";
  console.log(word.repeat(Infinity)); // Throws RangeError: Invalid count value
  ```

  - in JavaScript, `Infinity` is a special value that represents an **infinite quantity**. it is used to denote numbers that are _larger than any finite number_.

- if the count is **not an integer** (such as a _decimal_ like `2.5`), the `repeat()` method will **round** it down to the nearest integer.

  ```js
  let word = "Test";
  console.log(word.repeat(2.5)); // "TestTest"
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

  - `prompt()` method will **halt the execution** of the script **until the user interacts** with the _dialog box_.

&nbsp;

`Note`: While `prompt()` is useful for **quick testing** or **small applications**, it's generally **avoided** in modern, complex web applications due to its **disruptive nature** and **inconsistent behavior** across different _browsers_.

&nbsp;

## American Standard Code for Information Interchange (`ASCII`)

ASCII is **a system for encoding characters** such as letters, digits, and symbols into **numerical** values.

- Each **character** is mapped to a **specific** number.

- For example, `A` is represented by the number `65`, while `a` is represented by `97`.

- JavaScript strings use Unicode (`UTF-16`) internally, ASCII values match the first `128` Unicode characters.
  - Uppercase and lowercase English letters (`A-Z`, `a-z`).
  - Numbers (`0-9`).
  - Common punctuation marks and symbols (`!`, `@`, `#`, and _so on_).
  - Control characters (such as **newline** and **tab**).

in JavaScript, you can access the **numeric code of a character** using the `charCodeAt()` method. This method **returns the UTF-16 code** unit of the character at a specified **index**. For the first `128` _characters_, this value matches the ASCII code.

```js
let letter = "A";
console.log(letter.charCodeAt(0)); // 65
```

The `fromCharCode()` method allows you to do the **opposite**: convert a **UTF-16** code unit (which matches ASCII for basic characters) into its **corresponding character**.

```js
let char = String.fromCharCode(65);
console.log(char); //  A

let char = String.fromCharCode(97);
console.log(char); // a
```

`Note`: These methods are particularly useful when you need to **manipulate or compare characters based on their numeric code values**.

&nbsp;

## A Semicolon (`;`)

Semicolons are primarily used to **mark the end of a statement**. This helps the JavaScript engine understand **the separation of individual instructions**, which is crucial for correct execution and termination.

- Semicolons help **delineate statements**, and improve _code readability_ and \*reliability\*\*.

  ```js
  let message = "Hello, World!"; // first statement ends here
  let number = 42; // second statement starts here
  ```

Just as a period (`.`) marks the **end of a sentence** in _English_, a semicolon (`;`) signifies the **end of an executable line of code** in _JavaScript_.

- This allows the JavaScript engine to distinguish between separate commands.

Without the semicolon, the JavaScript engine \*might\*\* have trouble interpreting where one statement ends and another begins.

- Semicolons help **prevent ambiguities** in code execution and ensure that statements are _correctly terminated_.

&nbsp;

`Note`: While JavaScript has Automatic Semicolon Insertion (**ASI**) that can add semicolons automatically, explicitly including them improves code clarity and helps prevent errors that may arise from _unexpected_ ASI behavior.

&nbsp;

## Comments in JavaScript

Any line of code that is _commented_ out is **ignored** by the JavaScript engine. Comments are used to **explain code**, **make notes**, **documentation**, or **temporarily disable code**.

- They are there solely for the benefit of people **reading the code**, whether that's you or someone else.

- The comment provides important context for why "this" code _exists_.

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

`Note`: The goal is to **enhance readability**, **do not clutter** the code with _unnecessary_ explanations.

&nbsp;

## Data Types in JavaScript

- `Number`: A number represents both **integers** and **floating-point** values.
  - Examples of integers include 7, 19, and 90.

- **Floating point**: A floating point number is a number with a **decimal** point.
  - Examples include 3.14, 0.5, and 0.0001.

  - in JavaScript, there isn't a _dedicated_ Float data type. instead, all numbers, including both **integers** and **floating-point** numbers, are _represented_ by a single `Number` type.

- `String`: A string is a **sequence of characters**, or **text**, enclosed in **quotes**.
  - `"I like coding"` and `'JavaScript is fun'` are examples of strings.

- `Boolean`: A boolean represents one of two possible values: `true` or `false`.
  - To represent a condition, such as `isLoggedIn = true`.

- `Undefined`: An undefined value is a variable that has been declared but **not assigned** a value.

- `Null`: A value is an `empty` value, or a variable that has `intentionally` been assigned a value of null.

- `Object`: An object is a collection of **key-value** pairs. The key is the property _name_, and the value is the property _value_.
  - Here, the `pet` object has three properties or **keys**: `name`, `age`, and `type`. The values are `Fluffy`, `3`, and `dog`, respectively.

    ```js
    let pet = {
      name: "Fluffy",
      age: 3,
      type: "dog",
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

The typeof operator is used to **check the data type of a variable**. it returns a _string_ indicating the _type_ of the variable.

```js
let age = 25;
console.log(typeof age); // "number"

let isLoggedIn = true;
console.log(typeof isLoggedIn); // "boolean"
```

- However, there's a well-known "_quirk_"/_bug_ in JavaScript when it comes to `null`. The `typeof` operator returns `"object"` for `null` values.

  ```js
  let user = null;
  console.log(typeof user); // "object"
  ```

  When the language was first implemented, values like `null` were represented as a **"special" type of object**, leading to this _unexpected_ result.

  _Unfortunately_, this has become **a part of the language**, and while it's confusing, it's something **you'll need to be aware of**.(

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
    const notANumber = "hello world" / 2;
    console.log(notANumber); // NaN
    console.log(typeof notANumber); // number
    ```

&nbsp;

`Note`: Apart from the **standard decimal system** (`base 10`), JavaScript also **supports** numbers in different bases such as _binary_, _octal_, and _hexadecimal_. **Binary** is a `base-2` system that uses only digits `1` and `0`. **Octal** is a `base-8` system that uses only digits `0 to 7`. **Hexadecimal** is a `base-16` system that uses digits `0 to 9` and letters `a to f`, like you see in CSS _hex_ colors.

&nbsp;

## Arithmetic Operators

JavaScript provides tools to perform basic _arithmetic operations_ on numbers, such as **addition** (`+`), **subtraction** (`-`), **multiplication** (`*`), and **division** (`/`).

- JavaScript also includes operators for more _complex_ arithmetic operations, such as **remainder** (`%`) and **exponentiation** (`**`).

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
const result = 5 + "10";

console.log(result); // 510
console.log(typeof result); // string
```

- When you try to perform other arithmetic operations like **subtraction**, **multiplication**, or **division** with **a string and number**. In these cases, JavaScript tries to convert the string into a **number** before doing the math – another type coercion!

  ```js
  const subtractionResult = "10" - 5;
  console.log(subtractionResult); // 5
  console.log(typeof subtractionResult); // number

  const multiplicationResult = "10" * 2;
  console.log(multiplicationResult); // 20
  console.log(typeof multiplicationResult); // number

  const divisionResult = "20" / 2;
  console.log(divisionResult); // 10
  console.log(typeof divisionResult); // number
  ```

- But what if the **string isn't a number**? (`NaN`)

  ```js
  const subtractionResult = "abc" - 5;
  console.log(subtractionResult); // NaN
  console.log(typeof subtractionResult); // number

  const multiplicationResult = "abc" * 2;
  console.log(multiplicationResult); // NaN
  console.log(typeof multiplicationResult); // number

  const divisionResult = "abc" / 2;
  console.log(divisionResult); // NaN
  console.log(typeof divisionResult); // number
  ```

  - in the examples above, the string `'abc'` does not represent a valid numeric value, so JavaScript cannot convert it into a **meaningful number**. When such **conversion fails**, JavaScript returns `NaN`, which stands for "_Not a Number_".

- JavaScript treats **booleans as numbers** in mathematical operations: `true` becomes `1`, and `false` becomes `0`.

  ```js
  const result1 = true + 1;
  console.log(result1); // 2
  console.log(typeof result1); // number

  const result2 = false + 1;
  console.log(result2); // 1
  console.log(typeof result2); // number

  const result3 = "Hello" + true;
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

`Note`: JavaScript often performs **type coercion**, _automatically_ converting data types such as numbers, strings, and booleans in sometimes **unexpected ways**.

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

- Similar to mathematics, you can use parentheses `()` around certain parts of your expression to run _first_, **regardless of precedence** rules.

  ```js
  const result = (2 + 3) * 4;
  console.log(result); // 20
  ```

- **Associativity** is what tells JavaScript whether to evaluate operators from **left to right** or **right to left**.
  - For most operators like **addition** and **multiplication**, associativity is **_left to right_**.

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
    const result = 2 ** (3 ** 2);
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
console.log(5 === "5"); // false

// inequality
console.log(5 != "5"); // false

// strict inequality
console.log(5 !== "5"); // true
```

- Type coercion converts the **string** value to a **number** and then _compares_ the values.

&nbsp;

`Note`: it is considered best practice to **use strict** inequality and equality operators whenever possible, as _they do not perform type coercion_. it checks both **value** and **type**, providing more _predictable_ results.

&nbsp;

## Comparison Operators

Comparison operators allow you to **compare two values** and return a `true` or `false` result. You can then use the result to make a decision or control the flow of your program.

- The greater than operator (`>`), checks if the value on the _left_ is **greater** than the one on the _right_.

  ```js
  let a = 6;
  let b = 9;

  console.log(a > b); // false
  console.log(b > a); // true
  ```

- The greater than or equal operator (`>=`), checks if the value on the _left_ is **either greater than or equal** to the one on the _right_.

  ```js
  let a = 6;
  let b = 9;
  let c = 6;

  console.log(a >= b); // false
  console.log(b >= a); // true
  console.log(a >= c); // true
  ```

- The lesser than operator (`<`) checks if the value on the _left_ is **smaller** than the one on the _right_.

  ```js
  let a = 6;
  let b = 9;

  console.log(a < b); // true
  console.log(b < a); // false
  ```

- The less than or equal operator (`<=`) checks if the value on the _left_ is **smaller than or equal** to the one on the _right_.

  ```js
  let a = 6;
  let b = 9;
  let c = 6;

  console.log(a <= b); // true
  console.log(b <= a); // false
  console.log(a <= c); // true
  ```

&nbsp;

## `null` vs. `undefined`

in JavaScript, `null` and `undefined` are two distinct data types that **represent the absence of a value**, but they **behave differently** in comparisons.

- A variable is `undefined` when it has been **declared but hasn't been assigned a value**. it is the **default value** of **uninitialized variables** and **function parameters** that weren't provided an _argument_.

- The `null` type is an assignment value that **represents a deliberate non-value**. it is often used to indicate that a variable **intentionally has no value**.

### w/ Equality Operator (`==`)

When comparing `null` and `undefined` using the **equality operator**, JavaScript performs **type coercion**. This means it tries to convert the operands to the same type before making the comparison. In this case, `null` and `undefined` are **considered equal**.

```js
console.log(null == undefined); // true
```

The comparisons below return `false` because `null` and `undefined` are **only equal to each other (and themselves)** when using the **equality operator**.

```js
console.log(null == 0); // false
console.log(null == ""); // false
console.log(undefined == 0); // false
console.log(undefined == ""); // false
```

Tricky AF.

```js
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
```

`undefined`, on the other hand, **always converts to `NaN`** in numeric contexts, which makes **all numeric comparisons with `undefined` return `false`**.

```js
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
```

### w/ Strict Equality Operator (`===`)

However, when using the **strict equality operator**, which checks both value and type **without performing type coercion**, `null` and `undefined` are **not equal**.

```js
console.log(null === undefined); // false
```

&nbsp;

`Note`: Given these nuances, it is generally recommended to **use the strict equality operator when comparing values**, especially when dealing with `null` and `undefined`. This approach **helps avoid unexpected type coercion** and makes your code's behavior more _predictable_.

&nbsp;

## Unary Operators

Unary operators act on a **single operand to perform operations** like **type conversion**, **value manipulation**, or checking certain **conditions**.

- The **unary plus** operator **converts its operand into a number**. If the operand is already a number, it remains unchanged.
  - Unary plus is handy when you want to **make sure** you're working with **a numeric value**.

  ```js
  const str = "42";
  const strToNum = +str;

  console.log(strToNum); // 42
  console.log(typeof str); // string
  console.log(typeof strToNum); // number
  ```

- The **unary negation operator** works the same as plus, except it **negates the value** of the operand. in other words, it **flips the sign** from `+` to a `-`.

  ```js
  const str = "42";
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

  - `void` is also commonly used in _hyperlinks_ to **prevent navigation**.

    ```js
    <a href="javascript:void(0);">Click Me</a>
    ```

- The `typeof` operator **returns the type** of its operand as a **string**.

  ```js
  const value = "Hello world";

  console.log(typeof value); // string
  ```

- The **bitwise NOT** operator (`~`) **inverts the binary representation of a number**. Computers store numbers in binary format (1s and 0s). The `~` operator **flips every bit**, meaning it changes all **1s to 0s** and all **0s to 1s**.

  ```js
  const num = 5; // The binary for 5 is 00000101

  console.log(~num); // -6
  ```

  - in this example, `5` became `-6` because by applying the `~` operator to `5`, you get `- (5 + 1)`, which equals `-6` due to two's complement representation. Two's complement is a way computers represent negative numbers in binary. You probably won't use the bitwise NOT often unless you're working with low-level programming tasks like **manipulating bits directly**.

&nbsp;

## Bitwise Operators

Bitwise operators in JavaScript are special operators that **work on the binary representation of numbers**.

- A **bit** is the most basic unit of information.
  - it can have only two values: `0` or `1`.

- **Binary** is a **number system** that uses only `0` and `1` to represent all numbers.
  - in binary, each digit represents a **power of** `2`, _starting_ from the **rightmost** digit and _increasing_ as we move **left**.

    ```
    - 10 in binary is 1010

    1              0               1               0
    1*(2**3) = 8   0*(2**2) = 0    1*(2**1) = 2    0*(2**0) = 0   => 8+0+2+0 = 10
    ```

- **Bitwise operators** perform **operations on the binary representation** of numbers.
  - The bitwise **AND** (`&`) operator **returns** a `1` in each bit position for which the corresponding bits of both operands are `1`.

    ```js
    let a = 5; // Binary: 101
    let b = 3; // Binary: 011
    console.log(a & b); // 1 (Binary: 001)
    ```

  - The bitwise **OR** (`|`) operator **returns** a `1` in each bit position for which the corresponding bits of either or both operands are `1`.

    ```js
    let a = 5; // Binary: 101
    let b = 3; // Binary: 011
    console.log(a | b); // 7 (Binary: 111)
    ```

  - The bitwise **XOR** (`^`) operator **returns** a `1` in each bit position for which the corresponding bits of either, but not both, operands are `1`.

    ```js
    let a = 5; // Binary: 101
    let b = 3; // Binary: 011
    console.log(a ^ b); // 6 (Binary: 110)
    ```

  - The bitwise **NOT** (`~`) operator **inverts** all the **bits** of its operand.

    ```js
    let a = 5; // Binary: 101
    console.log(~a); // -6
    ```

    - This might seem surprising, but it's because of how negative numbers are represented in binary using two's complement.

  - The left shift (`<<`) operator **shifts** all bits to the **left** by a specified number of positions.

    ```js
    let a = 5; // Binary: 101
    console.log(a << 1); // 10 (Binary: 1010)
    ```

    - Here, all bits are shifted one position to the left, effectively **multiplying** the number by `2`.

  - The right shift (`>>`) operator **shifts** all bits to the **right**.

    ```js
    let a = 5; // Binary: 101
    console.log(a >> 1); // 2 (Binary: 10)
    ```

    - Here, all bits are shifted one position to the right, effectively **dividing** the number by `2` and rounding down.

&nbsp;

`Note`: Bitwise operators are often used in **low-level programming** and **cryptography**. While they may not be as commonly used in everyday JavaScript programming, understanding them can be beneficial for certain **specialized tasks** and can deepen your understanding of **how computers work at a fundamental level**.

&nbsp;

## Conditional Statements

Conditional statements let you **make decisions** in your JavaScript code. They allow your program to flow in a particular way **based on certain conditions**.

- An `if` statement takes a condition and runs a block of code if that condition is **truthy**. Truthy values are any values that result in `true` when evaluated in a Boolean context.
  - non-empty strings

  - **any other number** than `0` and `-0`

  - arrays

  - objects

  - the boolean `true`

- Falsy values are values that evaluate to `false` in a boolean context.
  - boolean `false`

  - `0` (zero)

  - `""` (empty string)

  - `null`

  - `undefined`

  - `NaN` (Not a Number)

  ```js
  if (null) {
    console.log("This will not run.");
  }

  if ("freeCodeCamp") {
    console.log("This will run.");
  }
  ```

- When a condition is `false`, then you can use an `else` clause:

  ```js
  const age = 15;

  if (age >= 18) {
    console.log("You're eligible to vote");
  } else {
    console.log("You're not eligible to vote"); // You're not eligible to vote
  }
  ```

- When you want to check **multiple conditions**, you can use an `else if` block.

  ```js
  const score = 87;

  if (score >= 90) {
    console.log("You got an A");
  } else if (score >= 80) {
    console.log("You got a B"); // You got a B
  } else if (score >= 70) {
    console.log("You got a C");
  } else {
    console.log("You failed! You need to study more!");
  }
  ```

&nbsp;

## Ternary Operator (`?:`)

The **ternary operator** is a compact way to write **simple if/else statements**.

```js
condition ? expressionIfTrue : expressionIfFalse;
```

```js
const temperature = 30;
const weather = temperature > 25 ? "sunny" : "cool";

console.log(`It's a ${weather} day!`);
```

&nbsp;

## Switch Case

A `switch` statement **evaluates an expression** and matches its value against a series of `case` clauses. When a match is found, the code block associated with that `case` is executed.

```js
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
  // code to be executed if expression doesn't match any case
}
```

- The `break` statement at the end of each case is **crucial**. it tells the program to **exit the switch block once a matching case has been executed**. Without it, the program would continue executing subsequent cases, a behavior known as "**fall-through**".

### When to Use

`switch` statements are typically used when you're **comparing a single variable against multiple possible values**. They're especially useful when you have **many potential conditions** to check against a **single variable**.

```js
let dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log("It's Monday! Time to start the week strong.");
    break;
  case 2:
    console.log("It's Tuesday! Keep the momentum going.");
    break;
  case 3:
    console.log("It's Wednesday! We're halfway there.");
    break;
  case 4:
    console.log("It's Thursday! Almost the weekend.");
    break;
  case 5:
    console.log("It's Friday! The weekend is near.");
    break;
  case 6:
    console.log("It's Saturday! Enjoy your weekend.");
    break;
  case 7:
    console.log("It's Sunday! Rest and recharge.");
    break;
  default:
    console.log("Invalid day! Please enter a number between 1 and 7.");
}
```

- `switch` statements can be more **readable** and **concise** when dealing with **many possible values** for a **single variable**.

- `switch` statements in use **strict comparison** (`===`) by default, which means they **don't perform type coercion**. This can be an advantage in terms of _predictability_ and avoiding subtle _bugs_.

### When Not to Use

`if/else if` statements are **more flexible**. They can evaluate complex conditions and different variables in each clause. This makes them suitable for a wider range of scenarios. Especially with **multiple variables**.

```js
let creditScore = 720;
let annualIncome = 60000;
let loanAmount = 200000;

let eligibilityStatus;

if (creditScore >= 750 && annualIncome >= 80000) {
  eligibilityStatus = "Eligible for premium loan rates.";
} else if (creditScore >= 700 && annualIncome >= 50000) {
  eligibilityStatus = "Eligible for standard loan rates.";
} else if (creditScore >= 650 && annualIncome >= 40000) {
  eligibilityStatus = "Eligible for subprime loan rates.";
} else if (creditScore < 650) {
  eligibilityStatus = "Not eligible due to low credit score.";
} else {
  eligibilityStatus = "Not eligible due to insufficient income.";
}

console.log(eligibilityStatus);
```

&nbsp;

`Note`: `switch` statements **excel at handling multiple possible values for a "single variable"**, while `if/else if` chains offer **more flexibility for complex conditions**.

&nbsp;

## Binary Logical Operators

Binary logical operators help you **evaluate** two expressions and return a result based on their **truthiness**.

### Logical AND (`&&`)

it checks if **both** operands are **true** and returns a result.

- if **both** operands are **truthy**, it _returns_ the **second value**, that is, the one on the **right**:

  ```js
  const result = true && "hello";

  console.log(result); // hello
  ```

- if **either** operand is **falsy**, it _returns_ the **falsy value**:

  ```js
  const result = 0 && 3;

  console.log(result); // 0
  ```

- if **both** operands are **falsy**, it _returns_ the first **falsy value**:

  ```js
  const result = false && 0;

  console.log(result); // false
  ```

- The **logical AND** operator is useful when you want to **check multiple conditions** and ensure that all are **true** before proceeding.

  ```js
  if (2 < 3 && 3 < 4) {
    console.log("The if block runs");
  } else {
    console.log("The else block runs");
  }
  ```

### Logical OR (`||`)

This operator checks if at least **one** of the operands is **truthy**. if the first operand is **truthy**, it **returns** that value:

```js
const result = "This is truthy" || false;

console.log(result); // This is truthy
```

- if the **first** operand is **falsy** but the **second** is **truthy**, the **second value will be logged** to the console:

  ```js
  const result = 0 || "This is truthy";

  console.log(result); // This is truthy
  ```

- An example:

  ```js
  let userInput;

  if (userInput || "Guest") {
    console.log("A user is present");
  } else {
    console.log("No user detected");
  }
  ```

### Nullish Coalescing (`??`)

it helps in scenarios where you want to **return** a value **only if** the **first value** is `null` or `undefined`.

```js
const result = null ?? "default";

console.log(result); // default
```

- The nullish coalescing operator is incredibly useful in situations where **`null` or `undefined` are the only values that should trigger a fallback** or default value.

  ```js
  const userSettings = {
    theme: null,
    volume: 0,
    notifications: false,
  };

  let theme = userSettings.theme ?? "light";
  console.log(theme); // light
  ```

&nbsp;

## The Math Object

While basic arithmetic operators can handle simple calculations, JavaScript offers a _built-in_ Math object to tackle more **complex math** challenges.

### `Math.random()`

This method **generates a random floating-point number** between `0` (_inclusive_) and `1` (_exclusive_).

- This means the possible output can be `0`, but it will never actually reach `1`.

  ```js
  const randomNum = Math.random();

  console.log(randomNum);
  // any number between 0 and 1 – 0 inclusive and 1 exclusive
  ```

### `Math.min()` & `Math.max()`

They both take **a set of numbers** and return the **minimum** and **maximum** value, _respectively_.

```js
const smallest = Math.min(1, 5, 3, 9);
console.log(smallest); // 1

const largest = Math.max(1, 5, 3, 9);
console.log(largest); // 9
```

### `Math.ceil()` & `Math.floor()`

if you wanted to **round numbers up or down** to the nearest whole integer, you could use the `Math.ceil()` and `Math.floor()` methods.

```js
console.log(Math.ceil(4.3)); // 5

console.log(Math.floor(4.7)); // 4
```

### `Math.round()`

Math.round() is the **hybrid** of `Math.ceil()` and `Math.floor()`. it **rounds a number** to its nearest integer, **taking the decimal point into account**:

```js
console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5
```

- if the decimal point is **less than 5**, the number is **rounded down**.
- And if the decimal point is **5 or greater**, the number is **rounded up**.

### Random Number Generator

```js
Math.floor(Math.random() * (maximum - minimum) + minimum);
```

Generating a random number between two whole numbers.

```js
const max = 10;
const min = 5;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// Generating a random number between 20 and 1
const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);
```

### `Math.trunc()`

it **removes the decimal part** of a number, returning only the integer portion, **without rounding**.

```js
console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9
```

### `Math.sqrt()` & `Math.cbrt()`

If you need to get the **square root** or **cube root** of a number, you can use the Math.sqrt() and Math.cbrt() methods, respectively.

```js
console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3
```

### `Math.abs()`

if you need to get the **absolute value of a number**, you can use the Math.abs() method. it returns the absolute value of a number, **turning negatives into positives**.

```js
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
```

### `Math.pow()`

it takes two numbers and **raises the second as the power to the first**.

```js
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(8, 2)); // 64
```

&nbsp;

## Not a Number (`NaN`)

It's a special value that represents an **unrepresentable** or **undefined** numerical result. `NaN` is a property of the **global object**, and it's also considered a type of **number** in JavaScript, which might seem _counterintuitive_ at first.

- `NaN` is typically the result of operations that should return a number but **cannot produce a meaningful numerical value**.

  ```js
  let result = 0 / 0;
  console.log(result); // NaN
  ```

  - Dividing zero by zero is mathematically **undefined**, so JavaScript returns `NaN`.

- One peculiar property of `NaN` is that **it is not equal to anything**, including _itself_.

  ```js
  console.log(NaN === NaN); // false
  ```

### `isNaN()`

The `isNaN()` function property is used **to determine whether a value is `NaN` or not**. it perform **type coercion** by default which can lead to _unexpected_ results.

```js
console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true

console.log(isNaN(true)); // false
console.log(isNaN(null)); // false
console.log(isNaN(37)); // false

console.log(isNaN("37")); // false: "37" is converted to 37
console.log(isNaN("37.37")); // false: "37.37" is converted to 37.37
console.log(isNaN("")); // false: empty string is converted to 0
console.log(isNaN(" ")); // false: string with a space is converted to 0

console.log(isNaN("blabla")); // true: "blabla" is not a number
```

### `Number.isNaN()`

it **does not perform type coercion** before testing. it only returns `true` if the value is exactly `NaN`.

- introduced in **ES6**

```js
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0)); // true

console.log(Number.isNaN("NaN")); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN({})); // false
console.log(Number.isNaN("blabla")); // false
```

- `Number.isNaN()` provides a more reliable way to check for `NaN` values, especially in cases where **type coercion might lead to unexpected results** with the global `isNaN()` function.

### `NaN` Based Error Handling

when dealing with numerical operations or user inputs that should be numbers, it's often necessary to **check for `NaN`** to handle **errors** or **unexpected inputs** gracefully.

```js
let a = 0;
let b = 0;
let result = a / b;

if (Number.isNaN(result)) {
  result = "Error: Division resulted in NaN";
}

console.log(result); // "Error: Division resulted in NaN"
```

&nbsp;

## `parseFloat()` & `parseInt()` Methods

These are two essential methods in JavaScript for **converting strings to numbers**. These methods are particularly useful when dealing with **user input** or **processing data** that comes in _string_ format but needs to be treated as _numerical_ values.

### `parseFloat()`

This method parses a **string** argument and returns a **floating-point** number. it is designed to _extract_ a number from the **beginning** of a string.

```js
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("3.14 abc")); // 3.14
console.log(parseFloat("3.14.5")); // 3.14
console.log(parseFloat("abc 3.14")); // NaN
```

### `parseInt()`

This method parses a **string** argument and returns an **integer**. it also starts from the **beginning** of the string, but it **stops at the first non-digit character**.

```js
console.log(parseInt("42")); // 42
console.log(parseInt("42px")); // 42
console.log(parseInt("3.14")); // 3
console.log(parseInt("abc123")); // NaN
```

- They both **ignore leading whitespace**.

  ```js
  console.log(parseFloat("  3.14")); // 3.14
  console.log(parseInt("  42")); // 42
  ```

- They both handle **plus and minus signs** at the beginning of the string.

  ```js
  console.log(parseFloat("+3.14")); // 3.14
  console.log(parseInt("-42")); // -42
  ```

&nbsp;

`Note`: They don't handle all number formats, such as **scientific notation**, directly. For more complex parsing needs, you might need to use additional techniques or libraries.

&nbsp;

## `toFixed()`

This method is a built-in JavaScript function that **formats a number using fixed-point notation**. It's particularly useful when you need to control **the number of decimal places in a number**, especially for displaying **currency** values or when working with **precise measurements**.

- For precise calculations.

- it takes **one optional argument**, which is **the number of digits** to appear after the decimal point. it **returns** a **"string"** representation of the number with the specified number of decimal places.

  ```js
  let num = 3.14159;
  console.log(num.toFixed(2)); // "3.14"
  ```

- The `.toFixed()` method **rounds the number to the nearest value** that can be represented with the specified number of decimal places.

  ```js
  console.log((3.14159).toFixed(3)); // "3.142"
  console.log((3.14449).toFixed(3)); // "3.144"
  console.log((3.1455).toFixed(3)); // "3.146"
  ```

- if you call `.toFixed()` **without arguments**, it defaults to `0` decimal places.

  ```js
  let num = 3.14159;
  console.log(num.toFixed()); // "3"
  ```

- The `.toFixed()` method can be particularly useful when working with **financial calculations** or displaying **prices**.

  ```js
  let price = 19.99;
  let taxRate = 0.08;
  let total = price + price * taxRate;

  console.log("Total: $" + total.toFixed(2)); // "Total: $21.59"
  ```

&nbsp;

## Functions

Functions allow you to write **reusable** and **organized** code. They can take inputs (**parameters**), perform _actions_, and `return` **outputs**. Functions makes your code more **modular**, **easier to maintain**, and more **efficient**.

```js
function greet() {
  console.log("Hello, Jessica!");
}

greet(); // "Hello, Jessica!"
```

- **Parameters** act as **placeholders** for the values that will be passed to the function when it is called.

  ```js
  function greet(name) {
    console.log("Hello, " + name + "!");
  }

  greet("Alice"); // Hello, Alice!
  greet("Nick"); // Hello, Nick!
  ```

- When a function finishes execution, it will always **return a value**. By default, the return value will be `undefined`.

  ```js
  function doSomething() {
    console.log("Doing something...");
  }

  let result = doSomething();
  console.log(result); // undefined
  ```

- if you need your function to return a specific value, then you will need to use the `return` statement.

  ```js
  function calculateSum(num1, num2) {
    return num1 + num2;
  }

  console.log(calculateSum(3, 4)); // 7
  ```

### Default Parameters

Functions support default parameters, allowing you to **set default values for parameters**.

```js
function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!
```

&nbsp;

## Anonymous Function

An anonymous function is a function **without a name** that can be **assigned to a variable**.

```js
const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7
```

&nbsp;

## Arrow Function Expression

```js
const greetings = (name) => {
  console.log("Hello, " + name + "!");
};
```

- if your parameter list only has **one** parameter in it, then you can **remove** the parentheses.

  ```js
  const greetings = (name) => {
    console.log("Hello, " + name + "!");
  };
  ```

- But if your arrow function has **no** parameters, then you **must use the parentheses**.

  ```js
  const greetings = () => {
    console.log("Hello");
  };
  ```

- And if your function body only contains only a **single line of code**, you can **remove** the curly braces.

  ```js
  const greetings = (name) => console.log("Hello, " + name + "!");
  ```

  - if you're using `return` inside the function, you **must use the curly braces**.

    ```js
    const calculateArea = (width, height) => {
      return width * height;
    };

    console.log(calculateArea(5, 3)); // 15
    ```

  - Even if you **remove** that `return` statement, the function will still **implicitly `return`** the calculation.

    ```js
    const calculateArea = (width, height) => width * height;
    ```

&nbsp;

## Scope

Scope in programming refers to the **visibility and accessibility of variables** in different parts of your code. it determines where variables can be accessed or modified.

### Global Scope

it is the **outermost** scope in a JavaScript program. Variables declared in the global scope are **accessible from anywhere** in your code, including within functions and blocks. These variables are often called **global variables**.

```js
let globalVar = "I'm a global variable";

function printGlobalVar() {
  console.log(globalVar);
}

printGlobalVar(); // "I'm a global variable"
```

- While global variables should be used **sparingly**, as they can lead to **naming conflicts** and make your code **harder to maintain**.

### Local Scope

it refers to variables that are **only accessible within a function**.

```js
function greet() {
  let message = "Hello, local scope!";
  console.log(message);
}

greet(); // "Hello, local scope!"
// console.log(message); // This will throw an error
```

- Local variables help to keep different parts of your code **isolated**, which is especially useful in larger programs.

### Block Scope

A block is any code section **within** curly braces, `{}`, such as in `if` statements, `for` loops, or `while` loops.

```js
if (true) {
  let blockVar = "I'm in a block";
  console.log(blockVar); // "I'm in a block"
}
console.log(blockVar); // This will throw an error
```

- Block scope is a concept introduced with the **let** and **const** keywords in **ES6**.

- Block scoping provides even **finer control** over variable accessibility, helping to prevent errors and make your code **more predictable**.

&nbsp;

## Arrays

in programming, arrays are fundamental data structures used to store collections of elements. An array is an **ordered collection of values**, each identified by a **numeric index**.

- To create an array in JavaScript, you can use square brackets, `[]`, and separate the values with commas (`,`).

  ```js
  let fruits = ["apple", "banana", "orange"];
  ```

- The **values** in a JavaScript array can be of different data types, including **numbers**, **strings**, **booleans**, **objects**, and even **other arrays**.

- One of the key characteristics of arrays is that they are **zero-indexed**, meaning that the **first** element in an array has an index of `0`, the **second** element has an index of `1`, and so on.

  ```js
  let fruits = ["apple", "banana", "orange"];
  console.log(fruits[0]); // "apple"
  console.log(fruits[2]); // "orange"
  ```

- Another key characteristic of arrays in JavaScript is that they are **dynamic**, meaning that their size can change after they are created. You can add or remove elements from an array using various array _methods_, such as `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, and more.

- if you try to access an **index that doesn't exist** in the array, JavaScript will return `undefined`.

  ```js
  let fruits = ["apple", "banana", "cherry"];
  console.log(fruits[3]); // undefined
  ```

### `.length` Property

Arrays in JavaScript have a special length property that **returns the number of elements in the array**.

```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3
```

### Updating an Array

You can update an element in an array by **assigning a new value to a specific index**.

```js
let fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]
```

- You can also add new elements to an array by **assigning a value to an index that doesn't yet exist**. However, **exercise caution** when doing this. If you assign a value to an index that is much larger than the current length of the array, you will create **undefined elements** for the indices in between, which can lead to unexpected behavior.

  ```js
  let fruits = ["apple", "banana", "cherry"];
  fruits[3] = "date";
  console.log(fruits); // ["apple", "banana", "cherry", "date"]
  ```

&nbsp;

## Basic Array Methods

### `.push()`

The `push()` method is used to add one or more elements to the **end of an array**.

```js
const fruits = ["apple", "banana"];
const newLength = fruits.push("orange");
console.log(newLength); // 3
console.log(fruits); // ["apple", "banana", "orange"]
```

- Declaring an array with the `const` keyword creates a **reference to the array**. While the array itself is **mutable** and can be modified, you _cannot_ reassign a new value to the fruits constant.

  ```js
  const fruits = ["apple", "banana"];
  fruits = ["This", "will", "not", "work"];
  console.log(fruits); // Uncaught TypeError: Assignment to constant variable.
  ```

### `.pop()`

The `pop()` method **removes the last element** from an array and _returns_ that element. it also **modifies the original** array.

```js
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(fruits); // ["apple", "banana"]
console.log(lastFruit); // "orange"
```

### `.unshift()`

The `unshift()` method adds one or more elements to the **beginning of an array** and _returns_ its new length.

```js
let numbers = [2, 3];
let newLength = numbers.unshift(1);
console.log(numbers); // [1, 2, 3]
console.log(newLength); // 3
```

- it works similarly to `push()`, but **modifies the start** of the array instead of the end.

### `.shift()`

The `shift()` method **removes the first element** from an array and _returns_ that element.

```js
let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors); // ["green", "blue"]
console.log(firstColor); // "red"
```

- it's similar to `pop()`, but it **works at the beginning** of the array instead of the end.

&nbsp;

`Note`: While `push()` and `unshift()` can add multiple elements at once, `pop()` and `shift()` remove only one element at a time.

&nbsp;

## Dimensional Arrays

### 1D Array

A one-dimensional array, often called an _array_, is like **a single row** of boxes.

- Each item in a one-dimensional array is accessed using a **single index**.

  ```js
  let fruits = ["apple", "banana", "cherry", "date"];
  console.log(fruits[2]); // "cherry"
  ```

- Suitable for **linear data** like _lists_ or _sequences_.

### 2D Array

A two-dimensional array is essentially **an array of arrays**. it is used to represent data that has **a natural grid-like structure**, such as a _chessboard_, a _spreadsheet_, or _pixels_ in an image.

- To access an element in a two-dimensional array, you need **two indices**: one for the **row** and one for the **column**.

  ```js
  let chessboard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
  ];

  console.log(chessboard[0][3]); // "Q"
  ```

  - `chessboard` is a _two-dimensional_ array representing a chess game's _initial_ setup.

- invaluable when dealing with more **complex, structured data**.

- in JavaScript, _two-dimensional_ arrays are actually **arrays of arrays**.
  - This means **each element of the outer array is itself an array**.

  - This nested structure allows for great **flexibility** but also requires **careful handling to avoid errors**.

`Note`: Choosing between _one-dimensional_ and _two-dimensional_ arrays depends on **the nature of your data** and **how you need to manipulate it**.

&nbsp;

## Array Destructuring

Array destructuring is a feature in JavaScript that allows you to **extract values from arrays** and **assign them to variables** in a more concise and readable way.

- it provides a **convenient syntax** for unpacking array elements into distinct variables.

- This technique is particularly useful when working with **arrays** and functions that return **multiple values**.

  ```js
  let fruits = ["apple", "banana", "orange"];

  let [first, second, third] = fruits;

  console.log(first); // "apple"
  console.log(second); // "banana"
  console.log(third); // "orange"
  ```

  - it allows for **easy access** to individual elements of the array **without using index notation**.

- it also allows you to **skip elements** you're not interested in by using commas (`,`).

  ```js
  let colors = ["red", "green", "blue", "yellow"];
  let [firstColor, , thirdColor] = colors;

  console.log(firstColor); // "red"
  console.log(thirdColor); // "blue"
  ```

- Another powerful feature of array destructuring is the ability to use **default values**.

  ```js
  let numbers = [1, 2];
  let [a, b, c = 3] = numbers;

  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
  ```

  - if the array has fewer elements than the variables you're trying to assign, you can provide default values.

### The Rest Syntax (`...`)

it allows you to capture the **remaining elements** of an array that haven’t been destructured into a new array.

```js
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let [first, second, ...rest] = fruits;

console.log(first); // "apple"
console.log(second); // "banana"
console.log(rest); // ["orange", "mango", "kiwi"]
```

`Note`: The rest syntax **must be the last element** in the destructuring pattern.

&nbsp;

## Reversing a String

Can be accomplished in JavaScript using a combination of string and array methods.

```js
let str = "coding";
let reversed = str.split("").reverse().join("");
console.log(reversed); //gnidoc
```

- `split()`: Splitting the string into an array of individual characters.
  - An empty string (`""`), which splits the string into individual characters.

  - A single space (`" "`), which splits the string wherever spaces occur.
  - A dash (`"-"`), which splits the string at each dash.

  ```js
  let str = "hello";
  let charArray = str.split("");
  console.log(charArray); // ["h", "e", "l", "l", "o"]
  ```

- `reverse()`: Reversing the elements of the array in place.
  - it modifies the original array rather than creating a new one.

  ```js
  let charArray = ["h", "e", "l", "l", "o"];
  charArray.reverse();
  console.log(charArray); // ["o", "l", "l", "e", "h"]
  ```

- `join()`: Joining the reversed array of characters back into a string.
  - it creates and returns a new string by concatenating all the elements in an array, separated by a specified separator string.

  - if you want to join the characters without any separator, you can use an empty string (`""`) as the argument.

  ```js
  let reversedArray = ["o", "l", "l", "e", "h"];
  let reversedString = reversedArray.join("");
  console.log(reversedString); // "olleh"
  ```

`Note`: Strings in JavaScript are immutable, which means you can't directly reverse a string by modifying it.

&nbsp;

## `indexOf` Method

in JavaScript, the `indexOf()` method is useful for finding the **first index of a specific element** within an array.

```js
array.indexOf(element, fromIndex);
```

- `element` represents **the value you want to search** for within the array.

- `fromIndex` parameter is **the position from which the search should start**. This parameter is **optional**.

  ```js
  let fruits = ["apple", "banana", "orange", "banana"];
  let index = fruits.indexOf("banana");
  console.log(index); // 1
  ```

  - if `fromIndex` is not provided, the search **starts from the beginning** of the array.

- if you want to start looking for an item **after a specific index**, then you can pass the **second argument**.

  ```js
  let colors = ["red", "green", "blue", "yellow", "green"];
  let index = colors.indexOf("green", 3);
  console.log(index); // 4
  ```

- if the element is **not found**, then it will return `-1`.

  ```js
  let fruits = ["apple", "banana", "orange"];
  let index = fruits.indexOf("grape");
  console.log(index); // -1
  ```

&nbsp;

## `splice()` Method

it allows you to **add or remove elements from any position** in an array. The return value for the `splice()` method will be an array of the items removed from the array. if nothing was removed, then an _empty array_ will be returned.

```js
array.splice(startIndex, itemsToRemove, item1, item2);
```

- it **mutates the original** array.

- `startIndex` specifies the **index at which to begin** modifying the array.

- `itemsToRemove` is an **optional** parameter indicating **how many elements to remove**.

  ```js
  let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
  let removed = fruits.splice(2, 2);

  console.log(fruits); // ["apple", "banana", "kiwi"]
  console.log(removed); // ["orange", "mango"]
  ```

  - if `itemsToRemove` is **omitted**, it will **remove all elements** from `startIndex` to the end of the array.

- (`item1`, `item2`, and so on) are the **elements to be added** to the array, beginning at the `startIndex`.

  ```js
  let colors = ["red", "green", "blue"];
  colors.splice(1, 0, "yellow", "purple");

  console.log(colors); // ["red", "yellow", "purple", "green", "blue"]
  ```

  - (`0`) means **no elements are removed** before insertion.

- You can also use `splice()` to **simultaneously remove and add** elements.

  ```js
  let numbers = [1, 2, 3, 4, 5];
  numbers.splice(1, 2, 6, 7, 8);

  console.log(numbers); // [1, 6, 7, 8, 4, 5]
  ```

- if you need to keep the original array unchanged, you should **create a copy** before using `splice()`.

  ```js
  let original = [1, 2, 3, 4, 5];
  let copy = [...original];
  copy.splice(2, 1, 6);

  console.log(original); // [1, 2, 3, 4, 5]
  console.log(copy); // [1, 2, 6, 4, 5]
  ```

- One common use case for `splice()` is to **remove a single element** from an array when you know its index.

  ```js
  let fruits = ["apple", "banana", "orange", "mango"];
  let indexToRemove = fruits.indexOf("orange");
  if (indexToRemove !== -1) {
    fruits.splice(indexToRemove, 1);
  }

  console.log(fruits); // ["apple", "banana", "mango"]
  ```

- Another common use case for `splice()` is to clear an array by **removing all elements**.

  ```js
  let array = [1, 2, 3, 4, 5];
  array.splice(0);

  console.log(array); // []
  ```

in conclusion, the `splice()` method is a **versatile way for modifying arrays** in JavaScript. it allows for **precise control** over adding and removing elements from any position in an array.

While `splice()` is powerful, it's worth noting that **for very large arrays, it can be less efficient** than other methods, especially when modifying the beginning of the array. This is because `splice()` may need to shift all _subsequent_ elements. in such cases, if you're only adding or removing elements at the end of the array, methods like `push()`, `pop()`, `unshift()`, and `shift(`) might be more appropriate.

&nbsp;

## `includes()` Method

A simple and efficient way to **check if an array contains a specific value** without needing to know its exact position. it **returns** a _boolean_ value that might be `true` or `false`.

```js
let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false
```

- The `includes()` method is **case-sensitive** when dealing with strings.

  ```js
  let fruits = ["apple", "banana", "orange"];
  console.log(fruits.includes("banana")); // true
  console.log(fruits.includes("Banana")); // false
  ```

- The `includes()` method can also accept an _optional_ **second parameter** that specifies **the position in the array to start the search**.

  ```js
  let numbers = [10, 20, 30, 40, 50, 30, 60];
  console.log(numbers.includes(30, 3)); // true
  console.log(numbers.includes(30, 6)); // false
  ```

- The `includes()` method uses the **strict equality comparison** (`===`), which means it can **distinguish between different types**.

  ```js
  let mixedArray = [1, "2", 3, "4", 5];
  console.log(mixedArray.includes(2)); // false
  console.log(mixedArray.includes("2")); // true
  ```

&nbsp;

## Shallow Copy

A shallow copy of an array is a new array that **has the same items as the original**. Shallow copies are helpful when you need to **modify the top-level structure**, such as **adding**, **removing**, or **reordering** elements, **without modifying the original** array or the inner array.

- if the array only **contains primitive values** like _numbers_ or _strings_, the **new array is completely separate**.

- But **if the array contains other arrays inside**, both the original and the copy have references to the same inner arrays. This means that if you change something inside a **shared inner array**, you will see that **change in both arrays**.

### w/ `concat()` Method

This method **creates a new array by merging two or more** arrays.

- When used with a **single array**, it effectively **creates a shallow copy**.

```js
const originalArray = [1, 2, 3];
const copyArray = [].concat(originalArray);

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```

### w/ `slice()` Method

When called **without arguments**, it **returns a shallow copy** of the entire array.

```js
const originalArray = [1, 2, 3];
const copyArray = originalArray.slice();

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```

### w/ Spread Operator (`...`)

it provides a **concise way to create shallow copies** of arrays.

```js
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```

&nbsp;

## Objects

An object is a fundamental data structure that allows you to **store and organize related data and functionality**.

You can think of an object as a container that holds various pieces of information, much like a filing cabinet holds different folders and documents. These pieces of information are called **properties**, and they consist of a name (or **key**) and a **value**.

```js
const exampleObject = {
  propertyName: value,
};
```

**Objects** are incredibly versatile and form the **backbone of JavaScript**. in fact, **almost everything in JavaScript is an object** or can be treated as one. This includes _arrays_, _functions_, and even primitive data types like _strings_ and _numbers_ when used in certain ways. This **object-centric** nature of JavaScript is one of the reasons it's such a flexible and powerful language.

```js
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
```

- Objects can **contain** not just simple values like _strings_ and _numbers_, but also **arrays**, or **other objects**.

&nbsp;

`Note`: Accessing a **non-existent** property on an object returns `undefined`.

&nbsp;

### Accessing Object Properties

- **Dot Notation** (`.`) is the most common and straightforward way to access object properties.

  ```js
  const person = {
    name: "Alice",
    age: 30,
    city: "New York",
  };

  // objectName.propertyName
  console.log(person.name); // Alice
  console.log(person.age); // 30
  ```

  - Dot notation is **concise** and **easy to read**, making it the preferred choice when you know the exact name of the property you want to access and that name is a **valid JavaScript identifier** (meaning it **doesn't start** with a _number_ and **doesn't contain** _special characters_ or _spaces_).

- **Bracket notation** (`[]`), on the other hand, allows you to **access object properties using a string inside square brackets**.

  ```js
  const oddObject = {
    "1stProperty": "Hello",
    "property with spaces": "World",
  };

  console.log(oddObject["1stProperty"]); // Hello
  console.log(oddObject["property with spaces"]); // World
  ```

  Bracket notation is **more flexible** than dot notation because it allows you to **use property names that aren't valid JavaScript identifiers**.
  - Another advantage of bracket notation is that it allows you to **use variables to access properties** dynamically.

    ```js
    const person = {
      name: "Alice",
      age: 30,
      city: "Wonderland",
    };

    let propertyName = "city";
    console.log(person[propertyName]); // Wonderland
    ```

&nbsp;

### Accessing Properties from Nested Objects and Arrays in Objects

Accessing properties from nested objects involves using the **dot notation** or **bracket notation**, much like accessing properties from simple objects. However, you'll need to **chain** these accessors to **drill down** into the nested structure.

```js
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321",
    },
  },
};

console.log(person.contact.phone.work); // "098-765-4321"
console.log(person["contact"]["phone"]["work"]); // "098-765-4321"
```

- Accessing data where **one of the object properties has the value of an array**.

  ```js
  const person = {
    name: "Alice",
    age: 30,
    addresses: [
      { type: "home", street: "123 Main St", city: "Anytown" },
      { type: "work", street: "456 Market St", city: "Workville" },
    ],
  };

  console.log(person.addresses[1].city); // "Workville"
  ```

&nbsp;

### Remove Properties from an Object

- `delete` Operator

  ```js
  const person = {
    name: "Alice",
    age: 30,
    job: "Engineer",
  };

  delete person.job;

  console.log(person.job); // undefined
  ```

- **Destructuring Assignment w/ Rest Parameters**: This approach **doesn't delete** the property, but **it creates a new object without the specified properties**.

  ```js
  const person = {
    name: "Bob",
    age: 25,
    job: "Designer",
    city: "New York",
  };

  const { job, city, ...remainingProperties } = person;

  // { name: "Bob", age: 25 }
  console.log(remainingProperties);
  ```

&nbsp;

### Check if an Object Has a Property

- `hasOwnProperty()` method **returns a boolean** indicating whether the object has the specified property as its _own_ property.

  ```js
  const person = {
    name: "Alice",
    age: 30,
  };

  console.log(person.hasOwnProperty("name")); // true
  console.log(person.hasOwnProperty("job")); // false
  ```

  - This method is considered **unsafe**!

- `Object.hasOwn()` method is the modern, **recommended** way to check if an object has a property as its own (_not inherited_).

  ```js
  const person = {
    name: "Alice",
    age: 30,
  };

  // Object.hasOwn(object, propertyName)
  console.log(Object.hasOwn(person, "name")); // true
  console.log(Object.hasOwn(person, "job")); // false
  ```

  - `Object.hasOwn()` only checks if the property exists — **it doesn't care about the property's value**. it **returns true** even when the value is `0`, `false`, `null`, or `undefined`.

    ```js
    const user = {
      username: "coder123",
      score: 0,
      isActive: false,
      nickname: null,
    };

    // Object.hasOwn() correctly reports these all exist
    console.log(Object.hasOwn(user, "score")); // true  (value is 0, but property exists)
    console.log(Object.hasOwn(user, "isActive")); // true  (value is false, but property exists)
    console.log(Object.hasOwn(user, "nickname")); // true  (value is null, but property exists)
    console.log(Object.hasOwn(user, "email")); // false (property was never added)

    // Danger! Using if() directly gives wrong results for falsy values
    if (user.score) {
      console.log("Has score"); // This will NOT print even though score exists!
    }

    // Safe! Object.hasOwn() gives correct result
    if (Object.hasOwn(user, "score")) {
      console.log("Has score:", user.score); // Has score: 0
    }
    ```

- `in` Operator: Like `hasOwnProperty()`, the `in` operator will return true if the property exists on the object.

  ```js
  const person = {
    name: "Bob",
    age: 25,
  };

  console.log("name" in person); // true
  ```

- **Check Against** `undefined`: This approach can be useful, but **it has limitations**. This method can give **false negatives** if a property _explicitly_ has the value `undefined`.

  ```js
  const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
  };

  console.log(car.brand !== undefined); // true
  console.log(car.color !== undefined); // false
  ```

&nbsp;

## Primitive & Non-Primitive Data Types



&nbsp;
