function add(addend1, addend2) {
    return addend1 + addend2;
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

function power(base, power) {
    return base ** power;
}


function operate(num1, operator, num2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        case'^':
            result = power(num1, num2);
            break;
        default:
            console.log('operate() switch statement error');
    }
    return Math.round(result * 100) / 100;
}


let displayValue = "";
function populateDisplay () {
    display.textContent = displayValue;
};

const clearKey = document.getElementById('clear');
clearKey.addEventListener('click', () => {
    displayValue = "";
    display.textContent = "";
});

const equalsKey = document.getElementById('equals');
equalsKey.addEventListener('click', () => {
    operate(/* add values here */);
    populateDisplay();
});

const additionKey = document.getElementById('addition');
additionKey.addEventListener('click', () => {});

const subtractKey = document.getElementById('subtraction');
subtractKey.addEventListener('click', () => {});

const multiplicationKey = document.getElementById('multiplication');
multiplicationKey.addEventListener('click', () => {});

const divisionKey = document.getElementById('division');
divisionKey.addEventListener('click', () => {});

const powerKey = document.getElementById('power');
powerKey.addEventListener('click', () => {});

const display = document.getElementById('display');


const oneKey = document.getElementById('number-1');
oneKey.addEventListener('click' , () => {
    displayValue = displayValue + "1";
});

const twoKey = document.getElementById('number-2');
twoKey.addEventListener('click' , () => {
    displayValue = displayValue + "2";
});

const threeKey = document.getElementById('number-3');
threeKey.addEventListener('click' , () => {
    displayValue = displayValue + "3";
});

const fourKey = document.getElementById('number-4');
fourKey.addEventListener('click' , () => {
    displayValue = displayValue + "4";
});

const fiveKey = document.getElementById('number-5');
fiveKey.addEventListener('click' , () => {
    displayValue = displayValue + "5";
});

const sixKey = document.getElementById('number-6');
sixKey.addEventListener('click' , () => {
    displayValue = displayValue + "6";
});

const sevenKey = document.getElementById('number-7');
sevenKey.addEventListener('click' , () => {
    displayValue = displayValue + "7";
});

const eightKey = document.getElementById('number-8');
eightKey.addEventListener('click' , () => {
    displayValue = displayValue + "8";
});

const nineKey = document.getElementById('number-9');
nineKey.addEventListener('click' , () => {
    displayValue = displayValue + "9";
});

const zeroKey = document.getElementById('number-0');
zeroKey.addEventListener('click' , () => {
    if(displayValue == "") return;   //to avoid numbers like "00546"
    displayValue = displayValue + "0";
});
//display pseudocode
/*
each number press concats to a display string

call populateDisplay()
*/

//psuedocode
/*
add event listeners for button presses
store a number as a string in a variable
    add to the string for subsequent number presses
store operator upon button press
    make sure that only the most recent operator is stored
store a second number as another variable
listen for the equals sign
use the two numbers and the operator in the opearate() function
display the result in the display div
*/