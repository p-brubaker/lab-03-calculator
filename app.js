// import functions
import { add, subtract, multiply, divide, intdiv } from './operations.js';

// reference needed DOM elements
const inputAddX = document.getElementById('input-add-x');
const inputAddY = document.getElementById('input-add-y');
const btnAdd = document.getElementById('btn-add');
const resultAdd = document.getElementById('result-add');

const inputSubtractX = document.getElementById('input-subtract-x');
const inputSubtractY = document.getElementById('input-subtract-y');
const btnSubtract = document.getElementById('btn-subtract');
const resultSubtract = document.getElementById('result-subtract');

const inputMultiplyX = document.getElementById('input-multiply-x');
const inputMultiplyY = document.getElementById('input-multiply-y');
const btnMultiply = document.getElementById('btn-multiply');
const resultMultiply = document.getElementById('result-multiply');


const inputDivideX = document.getElementById('input-divide-x');
const inputDivideY = document.getElementById('input-divide-y');
const btnDivide = document.getElementById('btn-divide');
const resultDivide = document.getElementById('result-divide');

const inputIntdivX = document.getElementById('input-intdiv-x');
const inputIntdivY = document.getElementById('input-intdiv-y');
const btnIntdiv = document.getElementById('btn-intdiv');
const resultIntdiv = document.getElementById('result-intdiv');

// set event listeners 
btnAdd.addEventListener('click', () => {
  const x = Number(inputAddX.value);
  const y = Number(inputAddY.value);
// do any needed work with the value(s)
  const sum = add(x, y);
// update DOM to reflect new value(s)
  resultAdd.textContent = sum;
})

btnSubtract.addEventListener('click', () => {
  const x = Number(inputSubtractX.value);
  const y = Number(inputSubtractY.value);
// do any needed work with the value(s)
  const difference = subtract(x, y);
// update DOM to reflect new value(s)
  resultSubtract.textContent = difference;
})

btnMultiply.addEventListener('click', () => {
  const x = Number(inputMultiplyX.value);
  const y = Number(inputMultiplyY.value);
// do any needed work with the value(s)
  const result = multiply(x, y);
// update DOM to reflect new value(s)
  resultMultiply.textContent = result;
})

btnDivide.addEventListener('click', () => {
  const x = Number(inputDivideX.value);
  const y = Number(inputDivideY.value);
// do any needed work with the value(s)
  const result = divide(x, y);
// update DOM to reflect new value(s)
  resultDivide.textContent = result;
})
  
btnIntdiv.addEventListener('click', () => {
  const x = Number(inputIntdivX.value);
  const y = Number(inputIntdivY.value);
// do any needed work with the value(s)
  const result = intdiv(x, y);
// update DOM to reflect new value(s)
  resultIntdiv.textContent = result;
})
