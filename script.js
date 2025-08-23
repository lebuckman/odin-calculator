const currentNumberDisplay = document.querySelector("#currentNumber");
const previousNumberDisplay = document.querySelector("#previousNumber");

const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".del");
const equalsBtn = document.querySelector(".equals");
const decimalBtn = document.querySelector(".decimal");
const percentBtn = document.querySelector(".percent");

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operation");

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
    if (currentNum.length < 10) {
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
            previousNum = add(previousNum, currentNum).toString();
            break;
        case "−":
            previousNum = subtract(previousNum, currentNum).toString();
            break;
        case "×":
            previousNum = multiply(previousNum, currentNum).toString();
            break;
        case "÷":
            previousNum = divide(previousNum, currentNum).toString();
            break;
    }
    displayResults();
}

function displayResults() {
    previousNumberDisplay.textContent = "";
    // currentOperator = "";
    if (previousNum.length < 9) {
        currentNumberDisplay.textContent = previousNum;
    } else {
        currentNumberDisplay.textContent = previousNum.slice(0, 9) + "...";
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
    if (b === 0) return 0; // Return 0 when dividing by 0

    return Number(a) / Number(b);
}
