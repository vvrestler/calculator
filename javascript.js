function add(addend1, addend2) {
    return +addend1 + +addend2;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(multiplicand, multiplier) {
    return multiplicand * multiplier;
}

function divide(dividend, divisor) {
    return dividend / divisor;
}


let operator = "";
function operate(num1, operator, num2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            console.log('operate() switch statement error');
    }
    return Math.round(result * 100) / 100;
};

let numToUse = "";

let displayValue = "";
const display = document.getElementById('display');
function populateDisplay () {
    display.textContent = displayValue;
};

const clearKey = document.getElementById('clear');
clearKey.addEventListener('click', () => {
    displayValue = "";
    numToUse = "";
    display.textContent = "";
    operator = "";
});

const equalsKey = document.getElementById('equals');
equalsKey.addEventListener('click', () => {
    if(operator != "") {  //to avoid calculating without an operator
        displayValue = operate(numToUse, operator, displayValue);
        populateDisplay();
        operator = "";
    }
});


const numButtons = document.querySelectorAll('.number');
for (button of numButtons) {
    button.addEventListener('click', function (e) {
        displayValue = displayValue + e.target.innerText;
        populateDisplay();
    });
};

const operatorButtons = document.querySelectorAll('.operator');
for (button of operatorButtons) {
    button.addEventListener('click', function(e) {
        if (operator != "") {
            displayValue = operate(numToUse, operator, displayValue);
            populateDisplay();
        }
        operator = e.target.innerText;
        numToUse = displayValue;
        displayValue = "";
    })
}