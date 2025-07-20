
let currentDisplay = document.getElementById("currentDisplay");
let accessMemory = [];
let currentExample = [];
let result = currentExample[0];

function writeNumber(num) {
    currentDisplay.innerHTML += num;
    accessMemory.push(num);
}

function writeOperator(operator) {
    getNewNumber();
    currentDisplay.innerHTML += operator;
    currentExample.push(operator);
    console.log(currentExample);
}

function clearEntry() {
    currentDisplay.innerHTML = '';
    //result = '';    //to bude tam, kde mam ted "hello"
    currentExample = [];
}

function getNewNumber() {
    let newNumber = accessMemory.join("");
    accessMemory = [];
    currentExample.push(parseInt(newNumber));
        console.log(currentExample);

}

function processMathOperation() {
    console.log("ich prozesse");
    getNewNumber();
    let result = currentExample[0]; //nebo ho initializovat na zacatku jako nulu a pricitat
    console.log("result in der forschleife", result);
    for (let i = 0; i < currentExample.length; i+=2) {
        
        let operator = currentExample[i]; //if i is lichy cislo - protoze zacinam nulou
        let nextNumber = currentExample[i+1]; //if i ist sudy cislo
        
        switch(operator) {
            case "+":
                result += nextNumber;
                break;
            case "-":
                result -= nextNumber;
                break;
            case "x":
                result *= nextNumber;
                break;
            case "/":
                result /= nextNumber;
                break;
        }
    console.log("my result", result);
}
}