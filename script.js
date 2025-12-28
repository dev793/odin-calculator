const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");

let operand1 = "";
let operand2 = "";
let operator = "";

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
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b); // TODO: handle divide by 0 here
    }
}

function updateDisplay(value) {
    display.textContent = value;
}

function handleClick(event) {
    const inputValue = event.target.textContent;
    console.log(inputValue);

    //if button press is a number
    if (Number.isInteger(Number(inputValue))) {
        if (operand1 == "") {
            operand1 += inputValue;
            updateDisplay(operand1);
        } else {
            if (operator == "") {
                operand1 += inputValue;
                updateDisplay(operand1);
            } else {
                operand2 += inputValue;
                updateDisplay(operand2);
            }
        }
    } else { //otherwise, the button press will be an operation
        //if A is empty, do nothing

        if (operand1 != "") {
            if (operand2 == "") {
                operator = inputValue;
                updateDisplay(operator);
                //TODO: handle pressing "=" at this point
            } else {
                operand1 = operate(operator, operand1, operand2);
                operand2 = "";
                operator = inputValue;
                updateDisplay(operand1);
            }
        }
    }
    console.log("Operand 1: " + operand1);
    console.log("Operand 2: " + operand2);
    console.log("Operator: " + operator);

}

buttons.addEventListener("click", handleClick);