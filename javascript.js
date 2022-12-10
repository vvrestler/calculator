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
            if(num2 == "0") {
                snarkyMessage = true;
            } else {
                result = divide(num1, num2);
            }
            break;
        default:
            console.log('operate() switch statement error');
    }
    return Math.round(result * 100) / 100;
};
var snarkyMessage;

let numToUse = "";

let displayValue = "";
const display = document.getElementById('display');
function populateDisplay () {
    display.textContent = displayValue;
    if(snarkyMessage) {
        display.textContent = "You can't do that!";
    }
};

const clearKey = document.getElementById('clear');
clearKey.addEventListener('click', () => {
    displayValue = "";
    numToUse = "";
    display.textContent = "";
    operator = "";
    snarkyMessage = "";
});

const equalsKey = document.getElementById('equals');
equalsKey.addEventListener('click', () => {
    if(operator != "") {  //to avoid calculating without an operator or with only one number
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
        if (operator != "" && displayValue != "") {
            displayValue = operate(numToUse, operator, displayValue);
            populateDisplay();
        }
        if (displayValue != "") {
            numToUse = displayValue;
            displayValue = "";
        }
        operator = e.target.innerText;
    })
};