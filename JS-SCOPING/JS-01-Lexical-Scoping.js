/**
 * ^ Lexical scoping is a mechanism that defines the accessibility or visibility of variables in different parts of the code based on their location in the source code. 
 * 
 * * It defines the scope of a variable based on where it is declared in the code, rather than where it is used.
 */

// & -------------------- Example - 01 --------------------
function showLastName() {
    const lastName = "Sofela";
    return lastName;
}

function displayFullName() {
    const fullName = "Oluwatobi " + lastName;
    return fullName;
}

// console.log(displayFullName()); // Reference error : lastName isn't defined

// & -------------------- Example - 02 --------------------
function profile() {
    const fullName = "Tobi Sho";
    function sayName() {
        const fullName = "Oluwa Sofe";
        function writeName() {
            return fullName;
        }
        return writeName();
    }
    return sayName();
}

console.log(profile()); // Oluwa Sofe