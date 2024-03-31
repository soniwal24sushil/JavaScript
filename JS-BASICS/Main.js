/**
 * Todo : (1) Variables in JS
 * 
 * ^ Variables are containers for storing data values. In JavaScript, we can declare variables using the var, let, or const keywords.
 */

// Using var (function-scoped)
var x = 10;

// Using let (block-scoped)
let y = 20;

// Using const (block-scoped, immutable)
const z = 30;

// * ---------------------------------------------------------------------------------------------------------------

/**
 * Todo : (2) Data Types in JS
 * 
 * ^ Data types are used to store different types of data.
 */

let numberData = 30;
console.log(`Data type of ${numberData} is : ${typeof numberData}`);

let stringData = "Sushil";
console.log(`Data type of ${stringData} is : ${typeof stringData}`);

let booleanData = false;
console.log(`Data type of ${booleanData} is : ${typeof booleanData}`);

let emptyData;
console.log(`Data type of ${emptyData} is : ${typeof emptyData}`);

let nullData = null;
console.log(`Data type of ${nullData} is : ${typeof nullData}`);

// * ---------------------------------------------------------------------------------------------------------------

/**
 * Todo : (3) Conditional Statements in JS
 * 
 * ^ They are used to perform different actions based on different conditions.
 */

let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

// * ---------------------------------------------------------------------------------------------------------------

/**
 * Todo : (4) Switch Statement in JS
 * 
 * ^ It is used to perform different actions based on different conditions.
 */

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Unknown";
}
console.log(dayName); // Output: Wednesday

// * ---------------------------------------------------------------------------------------------------------------

/**
 * Todo : (5) Loops (for, while, do...while) in JS
 * 
 * ^ Loops are used to execute a block of code repeatedly.
 */

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
