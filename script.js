const currentDisplay = document.getElementById("currentDisplay");
const previousDisplay = document.getElementById("previousDisplay");

const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = "";
let shouldResetDisplay = false;


/* -------------------------
   Update Display
------------------------- */

function updateDisplay() {

    currentDisplay.textContent =
        currentInput || "0";

    previousDisplay.textContent =
        previousInput && operator
            ? `${previousInput} ${displayOperator(operator)}`
            : "";
}


/* -------------------------
   Display operator symbols
------------------------- */

function displayOperator(operator) {

    if (operator === "*") return "×";

    if (operator === "/") return "÷";

    if (operator === "-") return "−";

    return operator;
}


/* -------------------------
   Add number
------------------------- */

function addNumber(number) {

    if (shouldResetDisplay) {

        currentInput = "";

        shouldResetDisplay = false;
    }

    if (number === "." && currentInput.includes(".")) {
        return;
    }

    if (number === "." && currentInput === "") {
        currentInput = "0.";
    } else {

        currentInput += number;
    }

    updateDisplay();
}


/* -------------------------
   Choose operator
------------------------- */

function chooseOperator(selectedOperator) {

    if (currentInput === "") {
        return;
    }

    if (previousInput !== "") {
        calculate();
    }

    previousInput = currentInput;

    operator = selectedOperator;

    currentInput = "";

    updateDisplay();
}


/* -------------------------
   Calculate result
------------------------- */

function calculate() {

    if (
        previousInput === "" ||
        currentInput === "" ||
        operator === ""
    ) {
        return;
    }

    const firstNumber = parseFloat(previousInput);
    const secondNumber = parseFloat(currentInput);

    let result;


    switch (operator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":

            if (secondNumber === 0) {

                currentDisplay.textContent =
                    "Cannot divide by 0";

                currentDisplay.classList.add("error");

                currentInput = "";
                previousInput = "";
                operator = "";

                return;
            }

            result = firstNumber / secondNumber;

            break;

        case "%":
            result = firstNumber % secondNumber;
            break;
    }


    result = Number(result.toFixed(10));

    currentInput = result.toString();

    previousInput = "";

    operator = "";

    shouldResetDisplay = true;

    currentDisplay.classList.remove("error");

    updateDisplay();
}


/* -------------------------
   Clear calculator
------------------------- */

function clearCalculator() {

    currentInput = "";
    previousInput = "";
    operator = "";

    shouldResetDisplay = false;

    currentDisplay.classList.remove("error");

    updateDisplay();
}


/* -------------------------
   Delete last character
------------------------- */

function deleteNumber() {

    if (shouldResetDisplay) {

        currentInput = "";

        shouldResetDisplay = false;

    } else {

        currentInput =
            currentInput.slice(0, -1);
    }

    updateDisplay();
}


/* -------------------------
   Button click handling
------------------------- */

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.dataset.value;
        const action = button.dataset.action;


        if (value !== undefined) {

            if (
                value === "+" ||
                value === "-" ||
                value === "*" ||
                value === "/" ||
                value === "%"
            ) {

                chooseOperator(value);

            } else {

                addNumber(value);
            }
        }


        if (action === "clear") {
            clearCalculator();
        }


        if (action === "delete") {
            deleteNumber();
        }


        if (action === "calculate") {
            calculate();
        }

    });

});


/* -------------------------
   Keyboard support
------------------------- */

document.addEventListener("keydown", (event) => {

    const key = event.key;


    /* Numbers */

    if (
        key >= "0" &&
        key <= "9"
    ) {

        addNumber(key);

    }


    /* Decimal */

    else if (key === ".") {

        addNumber(".");

    }


    /* Operators */

    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%"
    ) {

        chooseOperator(key);

    }


    /* Enter / = */

    else if (
        key === "Enter" ||
        key === "="
    ) {

        event.preventDefault();

        calculate();

    }


    /* Backspace */

    else if (key === "Backspace") {

        deleteNumber();

    }


    /* Escape */

    else if (key === "Escape") {

        clearCalculator();

    }

});
