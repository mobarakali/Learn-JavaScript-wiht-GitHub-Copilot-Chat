// Step 3: Control Structures

// Conditional Statements

// if Statement
// if...else Statement
// esle if Statement
// switch Statement

// Example:

// Conditional Statements
let age = 20;
if(age <18){
    console.log("You are a minor");
} else if(age >= 18 && age < 60){
    console.log("You are an adult");
} else {
    console.log("You are a senior citizen");
}

let day = 3;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}


// Loops

// for Loop
// while Loop
// do...while Loop

// Example:
// For Loop
for (let i = 0; i<5; i++){
    console.log("For loop iteration: " + i);
}

// While Loop
let j = 0;
while(j<5){
    console.log("While loop iteration:" + j);
    j++;
}

// Do...While Loop
let k = 0;
do{
    console.log("Do...While loop iteration: " + k);
    k++;
} while(k < 5);
