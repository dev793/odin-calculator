const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");

let operand1 = "";
let operand2 = "";
let operator = "";
let displayValue = ""; //will I need this?

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

function updateDisplay(value) {
    display.textContent = value;
}

function handleClick(event) {
    updateDisplay(event.target.textContent);

}

buttons.addEventListener("click", handleClick);






//expression = operand1 + operator + operation2