// import functions
import { add } from './operations.js';

// reference needed DOM elements
const inputAddX = document.getElementById('input-add-x');
const inputAddY = document.getElementById('input-add-y');
const btnAdd = document.getElementById('btn-add');
const resultAdd = document.getElementById('result-add');

// set event listeners 
btnAdd.addEventListener('click', () => {
  const x = Number(inputAddX.value);
  const y = Number(inputAddY.value);
// do any needed work with the value(s)
  const sum = add(x, y);
// update DOM to reflect new value(s)
  resultAdd.textContent = sum;
})
  
