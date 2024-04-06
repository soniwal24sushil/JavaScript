// * setInterval : It is a JavaScript function that repeatedly executes a specified function or code block at a specified interval (in milliseconds).

let id = setInterval(function () {
    console.log("Repeated message every 3 seconds");
}, 3000);

setTimeout(() => {
    clearInterval(id)
    console.log("Interval cleared after 12000 ms");
}, 13000)

