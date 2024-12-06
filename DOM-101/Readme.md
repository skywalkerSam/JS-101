# DOM Manipulation

Stands for `Document Object Model`. It's an object of the object `Window`.

- [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

- Change all the HTML elements in a page

- Change all the HTML attributes in a page

- Change all the CSS Styles in a page

- Remove existing HTML elements and attributes

- Add new HTML elements and attributes

- Javascript can react to all existing HTML events in a page

- Javascript can create new HTML events in a page

## DOM Selectors

```shell
document.write("Hello... World!")
```

### Most Common Ones

```shell
document.getElementsByTagName("h1")
```

```shell
document.getElementsByClassName("")
```

```shell
document.getElementById("")
```

id/class

```shell
document.getElementsByClassName("")[0]
```

## Query Selectors

It's important to CACHE selectors in `variables`, you already know why... don't ya?

```shell
document.querySelector("h1")
```

```shell
document.querySelectorAll("h1")
```

## Attributes

- getAttribute
- setAttribute

You gotta select it first, you can store it in a `var h1 = document.querySelector("h1");`, or perform actions directly on the selected.

```shell
document.querySelector("li").getAttribute("userid");
```

```shell
document.querySelector("li").setAttribute("userid", "33");
```

## Changing Styles

- style.{property}

```shell
h1.style.background = "black";
```

Separation of concerns!

## Class Name/List

- add
- remove
- toggle

```shell
h1.className = "coolTitle";
```

```shell
h1.classList.add("coolTitle");
```

```shell
h1.classList.remove("coolTitle");
```

```shell
h1.classList.toggle("coolTitle");
```

## innerHTML

```shell
h1.innerHTML = "<strong> Not Recommended !!! </strong>"
```

## parentElement / children

```shell
document.querySelectorAll("li")[1].parentElement;
```

```shell
document.querySelectorAll("li")[1].parentElement.parentElement;
```

```shell
document.querySelectorAll("li")[1].parentElement.parentElement.children;
```

## [DOM Events](https://developer.mozilla.org/en-US/docs/Web/API/Document#events)

Visit `Introduction.js` and `index.html` for more info...

- [MDN Web Docs: Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

- [Javascript Char Codes (Key Codes)](https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes)

- `createElement()`

- `appendChild()`

- `removeChild()`

- `createTextNode()`

## Until next time...

## ;)
