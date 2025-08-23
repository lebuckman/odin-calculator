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
let prevNum = "";

numberBtns.forEach((numBtn) =>
    numBtn.addEventListener("click", (e) => handleNumber(e.target.textContent))
);

operatorBtns.forEach((opBtn) =>
    opBtn.addEventListener("click", (e) => handleOperator(e.target.textContent))
);

function handleNumber(number) {
    currentNum += number;
    currentNumberDisplay.textContent = currentNum;
}

function handleOperator(operator) {
    currentOperator = operator;
    prevNum = currentNum;
    previousNumberDisplay.textContent = `${prevNum} ${currentOperator}`;
    currentNum = "";
    currentNumberDisplay.textContent = "";
}
