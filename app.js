// import functions
import { add, subtract } from './operations.js';

// reference needed DOM elements
const inputAddX = document.getElementById('input-add-x');
const inputAddY = document.getElementById('input-add-y');
const btnAdd = document.getElementById('btn-add');
const resultAdd = document.getElementById('result-add');

const inputSubtractX = document.getElementById('input-subtract-x');
const inputSubtractY = document.getElementById('input-subtract-y');
const btnSubtract = document.getElementById('btn-subtract');
const resultSubtract = document.getElementById('result-subtract');

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
  
