/**
 * * It follows function-scoping rules, meaning that the scope of a var variable is the function within which it is declared.
 * 
 * ^ If a "var" variable is declared within a block (e.g., if, while, or for), that block is not considered a new scope for the "var" variable.
 */

function varExample() {
    var x = 1;

    if (true) {
        var x = 2;
        console.log(x); // 2
    }

    console.log(x); // 2
}

varExample();

// & We can redeclare a "Var" variable
var a = 25;
var a = 250;
console.log(a);

// & If "var" is used outside any function, the variable is declared in the global scope, making it accessible throughout the entire JavaScript file.
var myName = "Sushil";
console.log(myName);