// & setTimeout : It is a JavaScript function used to execute a specified function or code block after a specified delay (in milliseconds)

let id1 = setTimeout(function () {
    console.log("Delayed message - 1");
}, 8000);

let id2 = setTimeout(() => {
    console.log("Delayed message - 2");
    clearTimeout(id1);
}, 4000);

