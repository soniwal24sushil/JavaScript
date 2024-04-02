// * It works same as "let", but we can't change the value associated with it.

function constExample() {
    if (true) {
        const x = 1;
        console.log(x); // 1
    }

    // This line will result in a "ReferenceError: x is not defined" (since x is not accessible outside the if block)
    // console.log(x);
}

constExample();

// & Redeclaration is not allowed with "const" keyword
const a = 25;
// const a = 250;

// & Changing the value is not allowed with "const" keyword
const pi = 3.14;
// pi=5;
console.log(pi);