/**
 * * In "let", the variable is only accessible within the block, function, or module in which it is declared.
 * 
 * ^ This means that the variable is not accessible outside of the block or function, even if it's located before the declaration.
 */

function letExample() {
    if (true) {
        let x = 1;
        console.log(x); // 1
    }

    // This line will result in a "ReferenceError: x is not defined" (since x is not accessible outside the if block)
    console.log(x);
}

letExample();

// & Redeclaration is not allowed with "let" keyword
let a = 25;
// let a = 250;