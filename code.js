// helloWorld function
function helloWorld() {
    return "Hello, World!";
}
// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(x) {
    if (typeof x === "string") {
        return "Hello, " + x + "!";
    } else {
        return "Hello, World!";
    }
}

function isFive(x) {
    return parseFloat(x) === 5;
}

function isEven(x) {
    return parseFloat(x) % 2 === 0;
}

function isVowel(x) {
    if (
        x === "A" ||
        x === "E" ||
        x === "I" ||
        x === "O" ||
        x === "U" ||
        x === "a" ||
        x === "e" ||
        x === "i" ||
        x === "o" ||
        x === "u"
    ) {
        return true;
    } else {
        return false;
    }
}

function add(x, y) {
    if (!isNaN(x) || !isNaN(y) === true) {
        return parseFloat(x) + parseFloat(y);
    } else {
        return NaN;
    }
}


