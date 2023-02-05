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

- forEach - loops through an array

```js
numbers.forEach((number) => console.log(number));
```

- map - returns a new array

```js
const numbers2 = numbers.map((number) => number * 2);
```

- filter - returns a new array based on condition

```js
const numbers3 = numbers.filter((number) => number > 2);
```

- reduce - returns a single value

```js
const numbers4 = numbers.reduce((acc, number) => acc + number, 0);
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
