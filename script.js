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
            if (b == 0) {
                alert("You can't divide by 0!");
                return "";
                
            } else {
                return divide(a, b);
            }
    }
}

function updateDisplay(value) {
    display.textContent = value;
}

function clear() {
    operand1 = "";
    operand2 = "";
    operator = "";
    updateDisplay("0");
}

function roundResult(number) {
    if (number != "") {
        return Math.round(number * 1000) / 1000;
    } else {
        return "";
    }
}

function handleClick(event) {
    const inputValue = event.target.textContent;
    console.log(inputValue);

    if (inputValue == "C") {
        clear()
    }

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
                if (inputValue != "=") {
                    operator = inputValue;
                    updateDisplay(operator);
                }               
            } else {
                operand1 = roundResult(operate(operator, operand1, operand2));
                operand2 = "";
                operator = inputValue;
                if (operand1 == "") {
                    clear();
                }
                updateDisplay(operand1);
            }
        }
    }
}

buttons.addEventListener("click", handleClick);