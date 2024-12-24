// Step 5 : Objects and Arrays

//Creating an object
let person = {
    firstName : "Mobarka",
    lastName : "Ali",
    age : 49,
    isStudent : false,
    greet: function(){
        return "Hello, " + this.firstName + " " + this.lastName;
    }
};

//Accessing object properties
console.log(person.firstName); // Mobarka
console.log(person.lastName); // Ali

// Calling a methode
console.log(person.greet()); // Hello, Mobarka Ali

// Arrays:

//Create an array
let numbers = [1,2,3,4,5];

// Access array elements
console.log(numbers[0]); // 1
console.log(numbers[2]); // 3

// Array methods
numbers.push(6); // Add an element to the end of the array
console.log(numbers); // [1,2,3,4,5,6]

numbers.pop(); // Remove the last element of the array
console.log(numbers); // [1,2,3,4,5]

numbers.shift(); // Remove the first element of the array
console.log(numbers); // [2,3,4,5]

numbers.unshift(7); // Add an element to the beginning of the array
console.log(numbers); // [7,2,3,4,5]