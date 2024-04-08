/**
 * ? Closure : Closures in JavaScript refer to the ability of a function to retain access to variables from its parent scope even after the parent function has finished executing.
 * 
 * * This means it has access to its own scope, the outer function's scope, and the global scope.
 * 
 */

// & --------------- Example - 1 ---------------
function outerFunction() {
    let outerVariable = 1;

    function innerFunction() {
        let innerVariable = 2;
        console.log(outerVariable + innerVariable);
    }

    return innerFunction;
}

let closure = outerFunction();
closure(); // 3

// & --------------- Example - 2 ---------------
function makeCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    return increment;
}

let counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// & --------------- Example - 3 ---------------
function outer(var1) {
    return function inner() {
        console.log(var1);
    }
}

const ex1 = outer("Hello");
ex1();

const ex2 = outer("Sushil");
ex2();