let js = 'amazing';
if (js === 'amazing')
    alert('JavaScript is FUN!');

console.log(40 + 8 + 23);

let myName = "Ledjo";
console.log(name);

// in javaScript we use camelCase for naming variables 
// we can't use reserved keywords as variable names
// we can't start a variable name with a number
// we can't use space or hyphen in variable names
// we can start a variable name with _ or $

let ez = true;
console.log(ez);

//typeof operator returns the type of a variable or an expression

console.log(typeof myName);
console.log(typeof ez);

let year;
console.log(year); // undefined
console.log(typeof year); // undefined

console.log(typeof null); // object (bug in javaScript)

// let, const, var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // error - cannot reassign a const variable

var job = 'programmer';
job = 'teacher';

// let is block scoped - it is only accessible inside the block it was declared in
// var is function scoped - it is only accessible inside the function it was declared in

// we don't have to declare a variable before assigning it a value
lastName = 'Ledjo'; // this is not a good practice because it creates a global variable 
console.log(lastName);

//operators 