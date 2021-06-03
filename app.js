// import functions

// reference needed DOM elements
const inputAddX = document.getElementById('input-add-x');
const inputAddY = document.getElementById('input-add-y');
const btnAdd = document.getElementById('btn-add');
const resultAdd = document.getElementById('result-add');

console.log(inputAddX, inputAddY, btnAdd, resultAdd);

// set event listeners 
btnAdd.addEventListener('click', () => {
  console.log('add button clicked');
})
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
