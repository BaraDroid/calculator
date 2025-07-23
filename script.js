let currentDisplay = document.getElementById("currentDisplay");
let accessMemory = [];
let currentExample = [];

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
  currentDisplay.innerHTML = "";
  //tam, kde je hello, taky nebude nic
  currentExample = [];
  accessMemory = [];
}

function getNewNumber() {
  let newNumber = accessMemory.join("");
  accessMemory = [];
  currentExample.push(parseInt(newNumber));
  console.log(currentExample);
}

function processMathOperation() {
  getNewNumber();
  let result = currentExample[0];

  // Schleife für die Berechnung (von links nach rechts)
  // Starte bei Index 1 (dem ersten Operator)
  // Springe in Schritten von 2 (Operator, dann Zahl)
  for (let i = 1; i < currentExample.length; i += 2) {
    let operator = currentExample[i];
    let nextNumber = currentExample[i + 1]; // Holt die Zahl nach dem Operator

    switch (operator) {
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
  }
  //tohle nefunguje, protoze je pak operator v accessMemory, coz nepotrebujem
  // currentExample auf das Ergebnis setzen, um Kettenrechnungen zu ermöglichen
  currentExample = [result];
  accessMemory = [];
}
