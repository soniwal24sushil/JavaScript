// Callback : Callbacks are functions that are passed as arguments to other functions and are executed after the completion of the main function.

function greet(personName, callback) {
    console.log(`Hello ${personName}!`);
    callback();
}

let demo = greet("Sushil", function () {
    console.log("I'm a callback function!");
})