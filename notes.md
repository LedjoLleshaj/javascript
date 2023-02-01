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
