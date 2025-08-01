let currentDisplay = document.getElementById("currentDisplay");
let accessMemory = [];
let currentExample = [];
let operationDone = false;

let moonImage = document.getElementById("moon");
let sunImage = document.getElementById("sun");
let controller = document.querySelector(".controller");
let myBody = document.querySelector("body");
let lightmode;
let darkmode;

let preferedDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
let storedTheme = localStorage.getItem('theme');

function checkTheme() {
  if(preferedDarkSystem || storedTheme == 'dark') {
    darkmode = true;
    lightmode = false;
    applyDarkMode();
    setModeInLocalStorage('dark');
  }
  else {
    darkmode = false;
    lightmode = true;
    applyLightMode;
    setModeInLocalStorage('light');
  }
}

function writeNumber(num) {
  if(!operationDone) {
    currentDisplay.innerHTML += num;
    accessMemory.push(num);
  }
  else {
    clearEntry();
    operationDone = false;
    writeNumber(num);
  }
}

function writeOperator(operator) {
  getNewNumber();
  currentDisplay.innerHTML += operator;
  currentExample.push(operator);
}

function clearEntry() {
  saveLatestOperation();
  currentDisplay.innerHTML = "";
  document.getElementById("mainResult").innerHTML = '';
  currentExample = [];
  accessMemory = [];
}

function getNewNumber() {
  let newNumber = accessMemory.join("");
  accessMemory = [];
  currentExample.push(parseInt(newNumber));
}

function processMathOperation() {
  getNewNumber();
  let result = currentExample[0];
  // Starte bei Index 1 (erster Operator)
  // Springe in 2-Schritten (Operator, Zahl)
  for (let i = 1; i < currentExample.length; i += 2) {
    let operator = currentExample[i];
    let nextNumber = currentExample[i + 1]; // die Zahl nach dem Operator
    result = readOperator(result, operator, nextNumber);
  }
  writeResult(result);
  accessMemory = [];
  operationDone = true;
}

function readOperator(currentResult, operator, nextNumber) {
  let newResult = currentResult;
  switch (operator) {
    case " + ":
      newResult += nextNumber;
      break;
    case " - ":
      newResult -= nextNumber;
      break;
    case " x ":
      newResult *= nextNumber;
      break;
    case " / ":
      newResult /= nextNumber;
      break;
  }
  return newResult;
}

function writeResult(outcome) {
  let mainDisplay = document.getElementById("mainResult");
  mainDisplay.innerHTML = '';
  mainDisplay.innerHTML = outcome;
}

function saveLatestOperation() {
  let myExample = document.getElementById("currentDisplay").innerHTML;
  let myResult = document.getElementById("mainResult").innerHTML;
  let pastResults = document.getElementById("pastResults");
  pastResults.innerHTML += `${myExample} = ${myResult}<br>`;
}

function toggleMode() {
  if(lightmode) {
    applyDarkMode();
  }
  else {
    applyLightMode();
  }
}

function applyDarkMode() {
  sunImage.classList.add("hidden");
    moonImage.classList.remove("hidden");
    myBody.classList.remove("light_mode_active");
    myBody.classList.add("dark_mode_active");
    controller.classList.add("controller_dark_mode");
    lightmode = false;
    darkmode = true;
    setModeInLocalStorage('dark');
}

function applyLightMode() {
  moonImage.classList.add("hidden");
    sunImage.classList.remove("hidden");
    myBody.classList.add("light_mode_active");
    myBody.classList.remove("dark_mode_active");
    controller.classList.remove("controller_dark_mode");
    lightmode = true;
    darkmode = false;
    setModeInLocalStorage('light');
}

function setModeInLocalStorage(theme) {
  localStorage.setItem('theme', theme);
}