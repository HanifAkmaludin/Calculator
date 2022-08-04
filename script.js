let prevNumber = "";
let calculationOperation = "";
let currentNumber = "0";
let inputScreen = "0";
let history = "";

function inputNumber(number) {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
}

function changeScreen(character) {
  if (inputScreen === "0") {
    inputScreen = character;
  } else if (character === "/") {
    inputScreen += " ÷ ";
  } else if (character === "*") {
    inputScreen += " x ";
  } else {
    inputScreen += character;
  }
}

function persen() {
  currentNumber = parseFloat(currentNumber) / 100;
}

function calculatorOperator(operator) {
  if (calculationOperation === "") {
    calculationOperation = operator;
  }
  prevNumber = currentNumber;
  currentNumber = "0";
}

function del(kalimat) {
  if (kalimat.length === 1) {
    currentNumber = kalimat.slice(0, -1);
    currentNumber = "0";
    return;
  }
  currentNumber = kalimat.slice(0, -1);
}

function calculate(operator) {
  switch (operator) {
    case "+":
      currentNumber = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      currentNumber = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      currentNumber = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      currentNumber = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }
  calculationOperation = "";
  prevNumber = "";
}

function clearScreen() {
  history = inputScreen;
  inputScreen = "";
}

function clearAll() {
  prevNumber = "";
  calculationOperation = "";
  currentNumber = "0";
  inputScreen = "0";
  history = "";
}

const screen = document.querySelector(".calculator-screen");
function updateScreen(update) {
  screen.value = update;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    inputNumber(number.value);
    changeScreen(number.value);
    updateScreen(inputScreen);
    console.log(currentNumber.length);
  });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    calculatorOperator(operator.value);
    changeScreen(operator.value);
    updateScreen(inputScreen);
  });
});

const samaDengan = document.querySelector(".samaDengan");
samaDengan.addEventListener("click", () => {
  clearScreen();
  calculate(calculationOperation);
  updateScreen(currentNumber);
  console.log(currentNumber);
  currentNumber = "0";
});

const persentasi = document.querySelector(".persen");
persentasi.addEventListener("click", () => {
  clearScreen();
  persen();
  updateScreen(currentNumber);
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const hapus = document.querySelector(".delete");
hapus.addEventListener("click", () => {
  del(currentNumber);
  updateScreen(currentNumber);
});
