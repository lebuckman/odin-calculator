const currentNumberDisplay = document.querySelector("#currentNumber");
const previousNumberDisplay = document.querySelector("#previousNumber");

const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".del");
const equalsBtn = document.querySelector(".equals");
const decimalBtn = document.querySelector(".decimal");
const percentBtn = document.querySelector(".percent");

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operation");

const MAX_DISPLAY_LENGTH = 9;

let currentOperator = "";
let currentNum = "";
let previousNum = "";

equalsBtn.addEventListener("click", operate);

numberBtns.forEach((numBtn) =>
    numBtn.addEventListener("click", (e) => handleNumber(e.target.textContent))
);

operatorBtns.forEach((opBtn) =>
    opBtn.addEventListener("click", (e) => handleOperator(e.target.textContent))
);

function handleNumber(num) {
    if (currentNum.length < MAX_DISPLAY_LENGTH) {
        currentNum += num;
        currentNumberDisplay.textContent = currentNum;
    }
}

function handleOperator(op) {
    currentOperator = op;
    previousNum = currentNum;
    previousNumberDisplay.textContent = `${previousNum} ${currentOperator}`;
    currentNum = "";
    currentNumberDisplay.textContent = "";
}

function operate() {
    switch (currentOperator) {
        case "+":
            previousNum = add(previousNum, currentNum);
            break;
        case "−":
            previousNum = subtract(previousNum, currentNum);
            break;
        case "×":
            previousNum = multiply(previousNum, currentNum);
            break;
        case "÷":
            previousNum = divide(previousNum, currentNum);
            break;
    }
    previousNum = parseFloat(
        previousNum.toFixed(MAX_DISPLAY_LENGTH)
    ).toString();

    displayResults();
}

function displayResults() {
    previousNumberDisplay.textContent = "";
    // currentOperator = "";
    if (previousNum.length <= MAX_DISPLAY_LENGTH) {
        currentNumberDisplay.textContent = previousNum;
    } else {
        currentNumberDisplay.textContent =
            previousNum.slice(0, MAX_DISPLAY_LENGTH) + "...";
    }
}

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if (Number(b) <= 0) {
        return "Error";
    }

    return Number(a) / Number(b);
}
