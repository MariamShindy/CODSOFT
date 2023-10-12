let input = "";

function appendNumber(number) {
    input += number;
    updateDisplay();
}

function appendOperator(operator) {
    input += operator;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(input);
        input = result;
        updateDisplay();
    } catch (error) {
        input = "Error";
        updateDisplay();
    }
}

function clearDisplay() {
    input = "";
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.value = input;
}
