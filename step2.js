// Declearing variables with different data types
var name = "Ali";
let age = 30;
const isStudent = true;
let x;
let y = null;
let sym = Symbol("foo");    
let bigInt = 123456789098765432101234567890n;

// Declearing non-primitive data types
let person = {
    name: "Ali",
    age: 30
}; // object

let numbers = [1, 2, 3, 4, 5]; // array

function greet() {
    console.log("Hello World!");
} // function

// logging variables to the console
console.log(name);
console.log(age);

console.log(isStudent);
console.log(x);
console.log(y);
console.log(sym);
console.log(bigInt);


console.log(person);
console.log(numbers);
//console.log(greet);  
greet(); // calling the function