// const digit0 = document.getElementById("digit0");
// const digit1 = document.getElementById("digit1");
// const digit2 = document.getElementById("digit2");
// const digit3 = document.getElementById("digit3");
// const digit4 = document.getElementById("digit4");
// const digit5 = document.getElementById("digit5");
// const digit6 = document.getElementById("digit6");
// const digit7 = document.getElementById("digit7");
// const digit8 = document.getElementById("digit8");
// const digit9 = document.getElementById("digit9");
//to nejak vubec nepotrebuju

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
    mathOperation = +mathOperation;
    console.log(typeof mathOperation);
}

//ted to musim u +-*/ rozdelit, tecka nerozdeluje, a udelat z toho cislo zvlast
//pridat variable operator, ktery bude na +-atd. takze dve funkce, jedna pro psani
//cisel a jedna pro operator
//  switch (operator) {
//         case '+': result = num1 + num2; break;
//         case '-': result = num1 - num2; break;
//         case '*': result = num1 * num2; break;
//         case '/':
//protoze je moznost mit vic cisel, nez 2, zwischenspeicher im Array
//numbers[num1, num2] , zvlast je ulozit jako numbers(index)
//ne, to bude lepsi to speichern jako operation["num1", "+", num2, "-", "etc"]
//if not operator, parseInt, if operator, pridej znaminko
//oder ich mache jestli se to da vynasobit jednickou a vyjde cislo nebo NaN