'use strict';

import { 
    sum,
    subtraction,
    multiply,
    divide
} from "./calculator.js";

const input = document.querySelectorAll('input, select');
const inputOne = document.querySelector('.number-one');
const inputTwo = document.querySelector('.number-two');
const sectionResult = document.querySelector('.result');
const btnReset = document.querySelector('.btn');
const select = document.querySelector('select');

input.forEach(item => item.addEventListener('input', numberСalculation));

function numberСalculation() {
    let numberOne = inputOne.value;
    let numberTwo = inputTwo.value;
    
    if (numberOne !=='' && numberTwo !=='' ) {
        switch(select.value) {
            case '+':
                sectionResult.textContent = sum(+numberOne, +numberTwo);
                break;
            case '-':
                sectionResult.textContent = subtraction(+numberOne, +numberTwo);
                break;
            case '*':
                sectionResult.textContent = multiply(+numberOne, +numberTwo);
                break;
            case '/':
                sectionResult.textContent = divide(+numberOne, +numberTwo);
                break;
        }
    }
}
btnReset.onclick = function() {
    sectionResult.textContent = ''
}



