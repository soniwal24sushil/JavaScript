/**
 * It is the term to describe the state where variables are un-reachable. 
 * They are in scope, but they aren't declared.
 * 
 * The let and const variables exist in the TDZ from the start of their enclosing scope until they are declared.
 */

x = 5; // ReferenceError: Cannot access 'x' before initialization
console.log(x);
let x;