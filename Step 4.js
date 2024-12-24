// Step 4: Functions

// Example:

// Function Declaratin
function greet(name){
    return "Helllo, " + name + "!";
}

// Function Call
console.log(greet("Ali")); // Output: Hello, Ali!

// Arrow Function
const greet1 = (name) => {
    return "Hello, " + name + "!";
}

console.log(greet1("Ali")); // Output: Hello, Ali!

// Example with Default Parameters:

// Function with default parameters
function greet2(name = "Guest"){
    return "Hello, " + name + "!"; 
}
console.log(greet2()); // Output: Hello, Guest!
console.log(greet2("Ali")); // Output: Hello, Ali!
