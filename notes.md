# Notes i kept during the course.

### [MDN documentation site](https://developer.mozilla.org/en-US/)

Javascript is dynamically typed language, so we don't need to specify the type of the variable however there are
7 Primitive data types in javascript

- Number `js let num = 10; `
- String `js let str = "Hello"; `
- Boolean `js let bool = true; `
- Null `js let n = null; `
- Undefined `js let u = undefined; `
- Symbol `js let sym = Symbol(); `
- BigInt `js let big = 10n; `

## Operator precedence in descending order

- `()` - Grouping
- `**` - Exponentiation
- `+` `-` - Unary plus and minus
- `*` `/` `%` - Multiplication, division, remainder
- `+` `-` - Addition and subtraction
- `<<` `>>` `>>>` - Bitwise shift operators
- `<` `<=` `>` `>=` - Relational operators
- `==` `!=` `===` `!==` - Equality operators
- `&` - Bitwise AND
- `^` - Bitwise XOR
- `|` - Bitwise OR
- `&&` - Logical AND
- `||` - Logical OR
- `??` - Nullish coalescing
- `?` `:` - Conditional (ternary) operator
- `=` `+=` `-=` `*=` `/=` `%=` `**=` `<<=` `>>=` `>>>=` `&=` `^=` `|=` - Assignment operators

## Type Conversion and Coercion

- Type conversion is when we explicitly convert one type to another by casting
- Type coercion is when javascript does it for us automatically
  Some examples of type coercion are
  - `js 1 + '1' // 11`
  - `js "1"-1 // 0`
  - `js "1"*2 // 2`
  - `js "1"/2 // 0.5`

### !! - `===` does not do type coercion but `==` does

## Truthy and Falsy values

- Falsy values are values that are considered false when encountered in a boolean context for example javascript will consider 0, null, undefined, NaN, false, '' as falsy values.

## Switch statement

- Switch statement is used to execute different code blocks based on different conditions.
- Switch statement uses strict equality (===) to compare the expression to the values of each case.
- we use break keyword to break out of the switch statement.
- we can use default keyword to specify the default code block to be executed if none of the cases match.
- If we want to execute multiple code blocks for a single case we can use fallthrough by not using break keyword.

```js
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  case value3:
  case value4:
    // bot value3 and value4 will execute this code block
    break;
  default:
  // code block
}
```

## Conditional (ternary) operator

- The conditional operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.

```js
condition ? exprIfTrue : exprIfFalse;
```

## Strict mode

- Strict mode makes it easier to write "secure" JavaScript.
- Strict mode changes previously accepted "bad syntax" into real errors.

```js
"use strict";
```

## Functions

- Functions in javascript are first class citizens, which means they can be assigned to variables, passed as arguments to other functions, returned from other functions and have properties and methods just like any other object.
- Arrow function syntax:

No parameters

```js
const sayHello = () => console.log("Hello");
```

One parameter

```js
const sayHello = (name) => console.log(`Hello ${name}`);
```

Multiple parameters

```js
const add = (a, b) => a + b;
```

Multiple lines

```js
const add = (a, b) => {
  const sum = a + b;
  return sum;
};
```

## Objects

- Objects are key value pairs
- We can use dot notation to access object properties
- We can use bracket notation to access object properties

```js
const person = {
  firstName: "Human",
  lastName: "Being",
  age: 9999999,
  hobbies: ["killing", "destroying"],
  address: {
    Galaxy: "Milky Way",
    Planet: "Earth",
    State: "Your mom",
  },
  myAge: function () {
    console.log(this.age); // can access age property using this keyword
  },
  buyCar: function (car) {
    this.car = car; // can add new properties to the object using this keyword
  },
};
console.log(person.firstName, person.lastName); // Human Being
console.log(person["firstName"], person["lastName"]); // Human Being
```

## For Loops

- for loop

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

- for in loop

```js
const number = [1, 2, 3, 4, 5];
for (let i in number) {
  console.log(i);
}
```

## HTML

- Everything in HTML is a tag and tags have attributes
- We can use id attribute to uniquely identify an element
- An html document is a tree structure with a root element called html

## DOM

- DOM stands for Document Object Model
- DOM is a tree structure of all the elements in the html document
- We can use querySelector to select an element from the DOM
- DOM methods are used to manipulate the DOM and are called [web-apis](https://developer.mozilla.org/en-US/docs/Web/API).
- Excepts DOM methods there are also timers, fetch, local storage, session storage, web workers, service workers, etc.

## QuerySelector

- querySelector is a DOM method that returns the first element that matches a specified CSS selector(s) in the document.
- querySelector can be used to select elements by id, class, tag name, attribute, etc.

```js
document.querySelector("#id");
document.querySelector(".class");
document.querySelector("tag");
document.querySelector("[attribute]");
```

## QuerySelectorAll

- querySelectorAll is a DOM method that returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
- querySelectorAll can be used to select elements by id, class, tag name, attribute, etc.

```js
document.querySelectorAll(".class");
```

### ClassList

- classList is a DOM property that returns the class name(s) of an element, as a DOMTokenList object.
- classList can be used to add, remove, toggle and check for classes.

```js
document.querySelector("button").classList.add("class");
```

## Events

- Events are actions that happen in the browser
- We can use addEventListener to listen for events

```js
document.querySelector("button").addEventListener("click", () => {
  console.log("button clicked");
});
```

## Keyboard Events

- keydown - fires when a key is pressed
- keyup - fires when a key is released
- keypress - fires when a key is pressed and released

```js
document.querySelector("input").addEventListener("keydown", function (e) => {
  console.log(e.key);
});
document.querySelector("input").addEventListener("keyup", function (e) => {
  console.log(e.key);
});
document.querySelector("input").addEventListener("keypress", function (e) => {
  console.log(e.key);
});
```

## This keyword

- this keyword refers to the object it belongs to
- this keyword has different values depending on where it is used
- this keyword is created when a function is declared or in a code block
- array functions don't have their own this value, they inherit it from the parent scope

```js
const person = {
  firstName: "Human",
  lastName: "Being",
  age: 9999999,
  hobbies: ["killing", "destroying"],
  address: {
    Galaxy: "Milky Way",
    Planet: "Earth",
    State: "Your mom",
  },
  myAge: function () {
    console.log(this.age); // can access age property using this keyword
  },
  buyCar: function (car) {
    this.car = car; // can add new properties to the object using this keyword
  },
  // XXXXXXXXXXXXXXX
  dontDoThis: () => {
    console.log(this); // undefined
    // this keyword is undefined in arrow functions
    //so it will take the value of the parent scope which is the window object
  },
};
```

`So inside an object we should always use regular functions instead of arrow functions.`
`Array functions are used only when we want to inherit the this keyword from the parent scope.`

## Desctructuring Arrays and Objects

- Destructuring is a way to extract data from arrays and objects
- `Destructuring arrays`

```js
const numbers = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = numbers;
console.log(a, b, c, d, e); // 1 2 3 4 5

const [f, g, ...rest] = numbers;
console.log(f, g, rest); // 1 2 [ 3, 4, 5 ]

const [h, , i, , j] = numbers;
console.log(h, i, j); // 1 3 5

const [k, l, m, n, o, p] = numbers; // undefined because there is no 6th element
console.log(k, l, m, n, o, p); // 1 2 3 4 5 undefined

const [q, r, s, t, u, v = 6] = numbers; // default value
console.log(q, r, s, t, u, v); // 1 2 3 4 5 6
```

- `Destructuring objects`

```js
const person = {
  firstName: "Human",
  lastName: "Being",
  age: 0,
  hobbies: ["creating", "destroying"],
  address: {
    Galaxy: "Milky Way",
    Planet: "Earth",
    State: "Your mom",
  },
};
const { firstName, lastName, age, hobbies, address } = person;
console.log(firstName, lastName, age, hobbies, address); // Human Being 0 [ 'creating', 'destroying' ] { Galaxy: 'Milky Way', Planet: 'Earth', State: 'Your mom' }

const { firstName: a, lastName: b, age: c, hobbies: d, address: e } = person;
console.log(a, b, c, d, e); // Human Being 0 [ 'creating', 'destroying' ] { Galaxy: 'Milky Way', Planet: 'Earth', State: 'Your mom' }
```

## Spread Operator

- Spread operator is used to expand an iterable object
- Spread operator doesn't create new references

```js
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8, 9, 10];
console.log(newNumbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const person = {
  firstName: "Human",
  lastName: "Being",
  age: 0,
  hobbies: ["creating", "destroying"],
  address: {
    Galaxy: "Milky Way",
    Planet: "Earth",
    State: "Your mom",
  },
};
const newPerson = { ...person, age: 9999999 };
console.log(newPerson); // { firstName: 'Human', lastName: 'Being', age: 9999999, hobbies: [ 'creating', 'destroying' ], address: { Galaxy: 'Milky Way', Planet: 'Earth', State: 'Your mom' } }
```

## Rest Operator

- Rest operator is used to collect multiple elements and condense them into a single element
- Rest operator creates new references and must always be one '1' and as the last element.
- Literally the opposite of spread operator and is used in function parameters like \*\*kwargs in python

```js
const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;
console.log(a, b, rest); // 1 2 [ 3, 4, 5 ]

const person = {
  firstName: "Human",
  lastName: "Being",
  age: 0,
  hobbies: ["creating", "destroying"],
  address: {
    Galaxy: "Milky Way",
    Planet: "Earth",
    State: "Your mom",
  },
};
const { firstName, lastName, ...rest } = person;
```

## Short Circuits (&& and ||)

- Short circuits are used to check if a value is true or false
- || - if the first value is true then it will immediately return true without even checking the second value

```js
console.log(undefined || 0 || "" || "Hello" || 12); // Hello because it is the first true value

console.log(restorant || 10); // 10 because restorant is undefined
```

- && - if the first value is false then it will immediately return false without even checking the second value

```js
console.log(0 && 1 && 2 && 3 && 4); // 0 because it is the first false value
```

## Nullish Coalescing Operator (??)

- Nullish coalescing operator is used to check if a value is null or undefined

```js
console.log(null ?? undefined ?? 0 ?? "" ?? "Hello" ?? 12); // Hello because it is the first non-nullish value
```

## Optional Chaining Operator (?.)

- Optional chaining operator is used to check if a property exists in an object

```js
const person = {
  firstName: "Human",
  lastName: "Being",
  age: 0,
  hobbies: ["creating", "destroying"],
  address: {
    Galaxy: "Milky Way",
    Planet: "Earth",
    State: "Your mom",
  },
};

console.log(person?.address?.Planet); // Earth
console.log(person?.address?.Planet?.Galaxy); // undefined

console.log(person?.address?.Planet?.Galaxy ?? "Not found"); // Not found
```

## Logical Assignment Operators

- Logical assignment operators are used to assign values to variables based on some condition

```js
let a = {
  b: 0,
  c: 1,
};

a.b &&= 2;
console.log(a); // { b: 0, c: 1 }
a.b ||= 2;
console.log(a); // { b: 2, c: 1 }
```

## For of Loop

- For of loop is used to iterate over an iterable object

```js
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}
```

- 'Array iterator with XXX.entries()'

```js
const numbers = [1, 2, 3, 4, 5];
for (const [index, number] of numbers.entries()) {
  console.log(index, number);
}
```

## Looping objects

```js
let open_days = ["Mon", "Tue", "Wed"];

let schedule = `We are open ${open_days.length} days a week:`;
for (let day of open_days) {
  schedule += ` ${day},`;
}
console.log(schedule); // We are open 3 days a week: Mon, Tue, Wed,
```

## Maps

- Maps are used to store key-value pairs
- Maps are iterable
- Maps are not indexed but we can use the get method to get the value of a key

```js
const restaurant = new Map();
restaurant.set("name", "KoKar BBC");
restaurant.set(1, "Verona, Italy");
console.log(restaurant.set("owner", "KoKar BBC")); // return the updated map
console.log(restaurant.get("name")); // KoKar BBC - get the value of the key

restaurant
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :)")
  .set(false, "We are closed :(");

const time = 21;
console.log(
  restaurant.get(
    time > restaurant.get("open") && time < restaurant.get("close")
  )
); // We are open :)

console.log(restorant.has("categories")); // true
```

## Functions returning functions

```js
const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};
greet("Hello")("KoKar"); // Hello KoKar

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hello")("KoKar"); // Hello KoKar
```

## Call, Apply and Bind

- Call is used to call a function with a different this value
- Apply is used to call a function with a different this value and accepts an array of arguments
- Bind is used to call a function with a different this value and returns a new function

```js
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "KoKar BBC"); // KoKar BBC booked a seat on Lufthansa flight LH239

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book; // this will return a function

// book(23, "Sarah Williams"); // TypeError: Cannot read property 'airline' of undefined because the 'this' points to undefined now that the book is a regular function

// Call method
book.call(eurowings, 23, "Sarah Williams"); // Sarah Williams booked a seat on Eurowings flight EW23
book.call(lufthansa, 239, "Mary Cooper"); // Mary Cooper booked a seat on Lufthansa flight LH239

// Apply method
const flightData = [583, "George Cooper"];
book.apply(eurowings, flightData); // George Cooper booked a seat on Eurowings flight EW583

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, "Steven Williams"); // Steven Williams booked a seat on Eurowings flight EW23
bookLH(239, "Mary Cooper"); // Mary Cooper booked a seat on Lufthansa flight LH239
```

## Immediately Invoked Function Expressions (IIFE)

- IIFE is a function that is called immediately after it is defined

```js
(function () {
  console.log("This will never run again");
})();

(() => console.log("This will ALSO never run again"))();
```

## Closures

- A closure is a function that has access to the parent scope even after the parent function has closed

```js
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers
```

## Arrays

```js
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apples", "oranges", "pears"];
const mixed = [22, "hello", true, undefined, null, { a: 1, b: 2 }, new Date()];
```

- We can access array elements using index
- We can use push method to add elements `to the end` of the array
- We can use unshift method to add elements `to the beginning` of the array
- Arrays are not a primitive data type, they are objects so even if we use const keyword we can still change the array elements but we can't reassign the array to something else.

```js
const numbers = [1, 2, 3, 4, 5];
numbers[2] = 10; // [1, 2, 10, 4, 5]
numbers.push(6); // [1, 2, 10, 4, 5, 6]
numbers.unshift(0); // [0, 1, 2, 10, 4, 5, 6]
numbers.pop(); // [0, 1, 2, 10, 4, 5]
numbers.shift(); // [1, 2, 10, 4, 5]
```

### Array methods

- ### More detailed examples are given in script.js file inside 11-Arrays-bankist folderS

- forEach - loops through an array

```js
numbers.forEach((number) => console.log(number));
```

- map - returns a new array by applying a function to each element (mapping each element into the new array)

```js
const numbers2 = numbers.map((number) => number * 2);
```

- filter - returns a new array based on thruthness of the condition

```js
const numbers3 = numbers.filter((number) => number > 2);
```

- reduce - returns a single value

```js
// accumulator -> SNOWBALL, current element, current index, array
const numbers4 = numbers.reduce((acc, number, index, array) => acc + number, 0);
```

- slice - returns a new array based on the start and end index without modifying the original array

```js
const numbers5 = numbers.slice(2, 4);
const numbers6 = numbers.slice(-2);
const copy = numbers.slice(); // or const copy = [...numbers];
```

- splice - modifies the original array,actually used more to eliminate elements

```js
numbers.splice(2); // numbers => [1, 2]
```

- reverse - reverses by modifying the original array

```js
numbers.reverse();
```

- concat - returns a new array by combining two arrays

```js
const numbers7 = numbers.concat(numbers2);
console.log(numbers7); // [1, 2, 3, 4, 5, 2, 4, 6, 8, 10]
```

- at - returns the element at the given index

```js
console.log(numbers.at(2)); // 3 // same as numbers[2]
console.log(numbers.at(-2)); // 4 // same as numbers[numbers.length - 2]
```

- for each loop - loops through an array but requires a callback function

```js
const rand_numbers = [3, 6, 2, 5, 3, 1, 10];

// for loop
for (let i = 0; i < rand_numbers.length; i++) {
  console.log(rand_numbers[i]);
}

// for of loop
for (let number of rand_numbers) {
  console.log(number);
}

rand_numbers.forEach((number) => console.log(number));
```

- for each loop with callback function where it will pass the current element as a parameter
- the function can take up to 3 parameters where the first one is the current element,
- the second one is the index of the current element and the third one is the array itself

```js
rand_numbers.forEach((number, index, array) => {
  console.log(`${number} is at index ${index} in ${array}`);
});
```

## For each for maps and sets as well

```js
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

currenciesUnique.forEach((value, _, map) => {
  // key is the same as value so we can use _ as a placeholder
  console.log(`${value}: ${value}`);
});
```

- map and flat methods on arrays are actually used alot together so `flatMap` was created but it goes only 1 lvl deep

```js
const balance = account
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
```

- Sorting in Javascript

```js
//Strings
const owners = ["Ledjo", "Elon", "Obama"];
console.log(owners.sort()); // mutates the string
console.log(owners);

//Numbers only

// return < 0, to sort A before B
// return > 0, to sort B before A
// movements.sort((a, b) => {
//   // ASC order
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);

// movements.sort((a, b) => {
//   // DES order
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
```

- Array.from method

```js
const oneToSeven = Array.from({length = 7}, (_,i) => i + 1)
```

## Summary of array methods

#### - To mutate the original array :

- Add to original `.push (end)` or `.unshift (start)`
- Remove from ogirinal `.pop (end)` or `.shift (start)` or `splice (any)`
- Other `.reverse` `.sort` `.fill`

#### - To create a new array :

- Computed from original `.map`
- Filtered from original usign condition `.filter`
- Portion of original `.slice`
- Adding original to another `.concat`
- Flattening `.flat` or `.flatMap`
- Joining two arrays `.join`

#### - An array index :

- Based on vaue `.indexOf`
- Based on condition `.findIndex`
- Find element based on condition `.find`

#### - Know if arrays include :

- A value `.includes`
- A condition `.some`
- A condition `.every`

#### - Transform array to value :

- Boil down to a single value `.reduce`

#### - Array looping :

- Based on callback function `.forEach`

## Numbers

- `Number.parseInt("str")` - parses a string and returns an integer
- `Number.parseFloat("str")` - parses a string and returns a float
- `Number.isNaN("str")` - checks if the value is NaN
- `Number.isFinite("str")` - checks if the value is finite
- `Number.isInteger("str")` - checks if the value is an integer

```js
Number.parseInt("30px"); // 30
Number.parseFloat("2.5rem"); // 2.5
Number.isNaN(20); // false
Number.isFinite(20); // true
Number.isInteger(20); // true
```

```js
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

// can use _ in between numbers to make them more readable
cont num = 23_456_789;
```

### BigInt

- `BigInt` is a new primitive type that can represent integers with arbitrary precision without limitations
- `BigInt` is created by appending `n` to the end of an integer

```js
const huge = 1234567890123456789012345678901234567890n;
console.log(huge); // 1234567890123456789012345678901234567890n
```

- We need to convert normal numbers to `BigInt` if we want to use them with `BigInt`

```js
const huge = 1234567890123456789012345678901234567890n;
const num = 23;
console.log(huge * BigInt(num)); // 283086907715328055453013345483271297022n
```

- BigInt however doesn't show the decimal part of the number

```js
console.log(20n / 3n); // 6n
console.log(20 / 3); // 6.666666666666667
```

## Dates

- `new Date()` - creates a new date object with the current date and time
- `new Date("2021-01-01")` - creates a new date object with the given date
- `new Date(2037, 10, 19, 15, 23, 5)` - creates a new date object with the given date

- Working with dates

```js
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-19T14:23:00.000Z
console.log(future.getTime()); // 2142243380000 - timestamp
console.log(Date.now()); // timestamp now
```

- Operations with Dates

```js
// sum and substract dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future); // 2142243380000

const now = new Date();
console.log((Math.abs(future - now) / 1000) * 60 * 60 * 24);
```

- Intl is a built in object that has a lot of methods for internationalization
  - Internationalizing Dates
  - `Intl.DateTimeFormat` - formats a date according to the locale and formatting options

```js
const future = new Date(2037, 10, 19, 15, 23);
locale = navigator.language;
// in order to add the extra informations in the dateformat below otherwise it would show only the date formatation
options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

//                                locale
//dateFormat = Intl.DateTimeFormat("en-US", options).format(future);
dateFormat = Intl.DateTimeFormat(locale, options).format(future);
```

- Internationalizing Numbers
- `Intl.NumberFormat` - formats a number according to the locale and formatting options

```js
const num = 3884764.23;
options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  useGrouping: false,
};

console.log("US: ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria: ", new Intl.NumberFormat("ar-SY", options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
```

## Timers

- `setTimeout` - calls a function once after the interval of time
- `setInterval` - calls a function repeatedly, after each interval of time
- `clearTimeout(nameOfTimer)` - stops the execution of the function passed to `setTimeout`
- `clearInterval` - stops the execution of the function passed to `setInterval`

```js
const ingredients = ["olives", "bacon"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log("Waiting...");

if (ingredients.includes("bacon")) clearTimeout(pizzaTimer);

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
```

## Countdown Timer Implementation

```js
const startLogOutTimer = function () {
  let time = 120;

  setInterval(function () {
    labelTimer.textContent = `${Math.trunc(time / 60)}:${time % 60}`;

    if (time === 0) {
      clearInterval();
      logout();
    }

    time--;
  }, 1000);
};
```

- Timer in this case starts after 1000ms and then every 1000ms it will repeat it, so incase we need to start the timer
  immediately we need to call the function once before the setInterval.

```js
if (timer) clearInterval(timer);
```

- When doing the logout we need to clear the timer otherwise it will keep running in the background
  and when we do the login again it will start a second timer .

## DOM Manipulation Advanced

- `closest` - returns the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter. If there isn't such an ancestor, it returns null.

- Sticky Navigation with Intersection Observer API

```js
// every time that the section1 is intersecting the viewport at 10% (0.1) the callback function will be executed
const initialCoords = section1.getBoundingClientRect();
const navHeight = nav.getBoundingClientRect().height;

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0. 2],
  rootMargin: `-${navHeight}px`, // to start the callback function '90px' before the element is intersecting the viewport
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
```

## Lazy Loading Images

- `lazy-loading` - is a technique that defers loading of non-critical resources at page load time. Instead, these non-critical resources are loaded at the moment of need.

```js
const imgTargets = document.querySelectorAll("img[data-src]");
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};
```

# Synchronous JavaScript vs Asynchronous JavaScript (AJAX)

- Most code is synchronous, meaning that it is executed line by line, as it appears in the code, however there are some commands that take a long time to execute and we don't want to block the execution of the code, so we use asynchronous code.

- `Alert` - is a synchronous code, it will block the execution of the code until the user clicks on the button.
- `setTimeout` - is an asynchronous code, it will not block the execution of the code, it will execute the code after the time specified in the first argument.
- `img.src` - is an asynchronous code, it will not block the execution of the code, it will execute the code after the image is loaded.

## AJAX and APIs (XMLHttpRequest)

- Old way of doing AJAX

```js
const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/name/albania");
request.send();

request.addEventListener("load", function () {
  console.log(this.responseText);

  const [data] = JSON.parse(this.responseText);
});
```

- New way of doing AJAX

```js
const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No neighbour found!");

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found"
      );
    })

    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
```

- In the example above the getJSON is a helper function defined as follows in order to avoid repeating the same code over and over again.

```js
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
```

## Promisify

- In order to promisify a function we need to return a promise and then resolve or reject it.

```js
// promisifying the setTimeout function
const wait = function (seconds) {
  // the setTimeout will never fail so we don't need to reject the promise
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 1 second");
  });
```

```js
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );

    // the above code is the same as the below code
    // since the resolve and reject functions are called with the same arguments

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));
```

## Consuming Promises with Async/Await

- Instead of using the `then` method we can use the `async` in fornt of a function that has inside call's that return a promise and `await` keyword in fornt of these functions.

```js
const whereAmI = async function (country) {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error("Problem getting country");

    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
  }
};
```

- It is important to note that the `await` keyword can only be used inside an `async` function.
- Best practises note that we should not mix `async` and `then` methods. We should use one or the other.

## Running Promises in Parallel

- We can run promises in parallel by using the `Promise.all` method.
- Remember that the Rpomise.all with short circuit if one of the promises fails.

```js
const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
```

## Race Promises

- We can use the `Promise.race` method to run promises in parallel and return the first one that resolves.

```js
const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.race([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data[0].capital);
  } catch (err) {
    console.error(err);
  }
};
```

- We can also use the `Promise.race` method to set a timeout for a promise like a short-circuit.

```js
const timeout = function (sec){
  return new Promise(_ reject => setTimeout(() => reject(new Error('Request took too long!')), sec * 1000))
}

Promise.race([getJSON(`https://restcountries.com/v3.1/name/${c1}`), timeout(3)])
```

- `async` can also be used outside functions but only if we are in a module, however this comes with a blocking behaviour so be careful when using it.
