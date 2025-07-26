/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector("#calculator");
const screenDisplay = document.querySelector(".display");
const operator = document.querySelector(".operator");
/*-------------------------------- Variables --------------------------------*/
let currentInput = "";
let firstNumber = null;
let currentOperator = "";
let secondNumber = null;
let finalResult = "";
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains("number")) {
    // Do something with a number
    let value = event.target.innerText;
    currentInput += value;
    screenDisplay.textContent = currentInput;
  }

  // Example
  if (event.target.classList.contains("operator")) {
    // Do something with this operator
    firstNumber = parseFloat(currentInput);
    currentOperator = event.target.innerText;
    currentInput = "";
    screenDisplay.textContent = "";
  }

  if (event.target.classList.contains("equals")) {
    let secondNumber = parseFloat(currentInput);
    if (currentOperator === "+") {
      finalResult = firstNumber + secondNumber;
    } else if (currentOperator === "-") {
      finalResult = firstNumber - secondNumber;
    } else if (currentOperator === "*") {
      finalResult = firstNumber * secondNumber;
    } else if (currentOperator === "/") {
      finalResult = firstNumber / secondNumber;
    }
    screenDisplay.textContent = finalResult;
  }

  if (event.target.innertext === "C") {
    firstNumber = null;
    secondNumber = null;
    currentOperator = "";
    currentInput = "";
    screenDisplay.textContent = 0;
  }
});

/*-------------------------------- Functions --------------------------------*/
    