// * Hoisting : It is a behavior defined by the JavaScript engine's "execution context" creation phase, where variable and function declarations are processed before any code is executed.

// & Hoisting in var
x = 5;
console.log(x);
var x;

// & Hoisting in function
myFun();
function myFun() {
    console.log("Inside myFun");
}

// & Hoisting in let : Not possible
// x1 = 5;
// console.log(x1); // Output: ReferenceError: x is not defined
// let x1;

// & Hoisting with Function Expressions
hello(); // Error: hello is not a function
var hello = function () {
    console.log("Hello, world!");
}
/**
 * Unlike function declarations, function expressions are not hoisted in the same way.
 * Only the variable declaration var hello; is hoisted, not the function definition.
 * Therefore, trying to invoke hello() before the function definition results in a TypeError, as hello is initially undefined, not a function.
 */