const digit0 = document.getElementById("digit0");
const digit1 = document.getElementById("digit1");
const digit2 = document.getElementById("digit2");
const digit3 = document.getElementById("digit3");
const digit4 = document.getElementById("digit4");
const digit5 = document.getElementById("digit5");
const digit6 = document.getElementById("digit6");
const digit7 = document.getElementById("digit7");
const digit8 = document.getElementById("digit8");
const digit9 = document.getElementById("digit9");

let currentDisplay = document.getElementById("currentDisplay")

function writeOperation(mathSign) {
    currentDisplay.innerHTML += mathSign;
}

function clearEntry() {
    currentDisplay.innerHTML = '';
}

function processMathOperation() {
    let mathOperation = currentDisplay.innerHTML;
    console.log(typeof mathOperation);
    mathOperation = parseInt(mathOperation); //to nic nedela
    console.log(typeof mathOperation);
}