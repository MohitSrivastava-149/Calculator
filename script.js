let display = document.querySelector('.display');
let calculation = '';

function appendNumber(number) {
    if (calculation === '0' && number === '0') {
        return; // Avoid multiple leading zeros
    }
    if (calculation === '0' && number !== '.') {
        calculation = ''; // Reset if the current value is just '0'
    }
    calculation += number;
    display.value = calculation;
}

function appendOperator(operator) {
    let lastChar = calculation.slice(-1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        return; // Avoid adding multiple operators consecutively
    }
    calculation += operator;
    display.value = calculation;
}

function clearDisplay() {
    calculation = '';
    display.value = '0';
}

function calculateResult() {
    try {
        let result = eval(calculation);
        if (Number.isFinite(result)) {
            display.value = result;
            calculation = String(result); // Store result for further operations
        } else {
            throw new Error('Invalid calculation');
        }
    } catch (error) {
        alert('Error: Invalid calculation');
        clearDisplay();
    }
}