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
