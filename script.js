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

// function processMathOperation() {
//   console.log("ich prozesse");
//   getNewNumber();
//   let result = currentExample[0]; //nebo ho initializovat na zacatku jako nulu a pricitat
//   console.log("result in der forschleife", result);
//   for (let i = 0; i < currentExample.length; i += 2) {
//     let operator = currentExample[i]; //if i is lichy cislo - protoze zacinam nulou
//     let nextNumber = currentExample[i + 1]; //if i ist sudy cislo

//     switch (operator) {
//       case "+":
//         result += nextNumber;
//         break;
//       case "-":
//         result -= nextNumber;
//         break;
//       case "x":
//         result *= nextNumber;
//         break;
//       case "/":
//         result /= nextNumber;
//         break;
//     }
//     console.log("my result", result);
//     //a pak jeste musim ten result napsat, kam patri
//   }
// }

function processMathOperation() {
  getNewNumber();
  for (let i = 0; i < currentExample.length; i++) {
    const element = currentExample[i];
    let result = currentExample[0];

    console.log("vysledek je ", result);
    
  }
      if(currentExample[1] === '+') {
      console.log("jsem drin!");
      return result = result + currentExample[2]; //to nemuze fungovat, pze zatim neznam to druhy
    }
    console.log("vysledek je ", result);
}