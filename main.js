/**********
 * DATA *
 **********/




const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  return result;
}

const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

//  Reset Button Variable
let resetButton = document.querySelector("#reset-button");


//  Dice Starting Values 
const d6Start = "images/start/d6.png";
const d12Start = "images/start/d12.jpeg";
const d20Start = "images/start/d20.jpg";

// ================ [Single D6 Die] ================

//Dice for Single Roll
let singleD6 = document.querySelector("#d6-roll");
singleD6.src = d6Start;

// D6 Statistics
let d6Mean = document.querySelector("#d6-rolls-mean");
let d6Median = document.querySelector("#d6-rolls-median");
let d6Mode = document.querySelector("#d6-rolls-mode");

// ============ [Double D6 Dice] ===================

// Die for Double Roll
let doubleD6_1 = document.querySelector("#double-d6-roll-1");
doubleD6_1.src = d6Start;
let doubleD6_2 = document.querySelector("#double-d6-roll-2");
doubleD6_2.src = d6Start;

// Double D6 Statistics
let doubleD6Mean = document.querySelector("#double-d6-rolls-mean");
let doubleD6Median = document.querySelector("#double-d6-rolls-median");
let doubleD6Mode = document.querySelector("#double-d6-rolls-mode");

// =========== [D12 Die] ======================

// Dice for 12 sided Die
let d12 = document.querySelector("#d12-roll");
d12.src = d12Start;

// D12 Statistics
let d12Mean = document.querySelector("#d12-rolls-mean");
let d12Median = document.querySelector("#d12-rolls-median");
let d12Mode = document.querySelector("#d12-rolls-mode");

// ============== [D20 Die] ===============

// Dice for 20 sided Die
let d20 = document.querySelector("#d20-roll");
d20.src = d20Start;

// D20 Statistics

let d20Mean = document.querySelector("#d20-rolls-mean");
let d20Median = document.querySelector("#d20-rolls-median");
let d20Mode = document.querySelector("#d20-rolls-mode");

/*******************
 * EVENT LISTENERS *
 *******************/
singleD6.addEventListener("click", singleD6Roll);
doubleD6_1.addEventListener("click", doubleD6Roll);
doubleD6_2.addEventListener("click", doubleD6Roll);
d12.addEventListener("click", d12Roll);
d20.addEventListener("click", d20Roll);
resetButton.addEventListener("click", hardReset);

/******************
 * RESET FUNCTION *
 ******************/
// Reset function
function hardReset() {
  // Resetting Single 6 Die
  singleD6.src = d6Start;
  sixes.length = 0;
  d6Mean.textContent = "NA";
  d6Median.textContent = "NA";
  d6Mode.textContent = "NA";

  // Resetting Double 6 Dice
  doubleD6_1.src = d6Start;
  doubleD6_2.src = d6Start;
  doubleSixes.length = 0
  doubleD6Mean.textContent = "NA";
  doubleD6Median.textContent = "NA";
  doubleD6Mode.textContent = "NA";

  // Resetting D12 Die
  d12.src = d12Start;
  twelves.length = 0;
  d12Mean.textContent = "NA";
  d12Median.textContent = "NA";
  d12Mode.textContent = "NA";

  // Resetting D20 Die
  d20.src = d20Start;
  twenties.length = 0;
  d20Mean.textContent = "NA";
  d20Median.textContent = "NA";
  d20Mode.textContent = "NA";

}



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
// Signle D6 Roll Function
function singleD6Roll() {
  let sixt = getRandomNumber(6)
  let diceString = "images/d6/";
  diceString += sixt + ".png"
  singleD6.src = diceString;
  sixes.push(sixt);
  d6Mean.textContent = getAverage(sixes);
  d6Median.textContent = getMedian(sixes);
  return sixes;
}
// Double D6 Roll Function
function doubleD6Roll() {
  let sixt = getRandomNumber(6);
  let sixt2 = getRandomNumber(6);
  let diceString = "images/d6/";
  let diceString1 = diceString + sixt + ".png";
  let diceString2 = diceString + sixt2 + ".png";
  doubleD6_1.src = diceString1;
  doubleD6_2.src = diceString2;
  doubleSixes.push(sixt + sixt2);
  doubleD6Mean.textContent = getAverage(doubleSixes);
  doubleD6Median.textContent = getMedian(doubleSixes);
  return doubleSixes;
}
// D12 Roll Function
function d12Roll() {
  let twelth = getRandomNumber(12);
  let diceString = "images/numbers/" + twelth + ".png";
  d12.src = diceString;
  twelves.push(twelth);
  d12Mean.textContent = getAverage(twelves);
  d12Median.textContent = getMedian(twelves);
  return twelves;
}
// D20 Roll Function
function d20Roll() {
  let twentieth = getRandomNumber(20);
  let diceString = "images/numbers/" + twentieth + ".png";
  d20.src = diceString;
  twenties.push(twentieth);
  d20Mean.textContent = getAverage(twenties);
  d20Median.textContent = getMedian(twenties);
  return twenties;
}


/****************
 * MATH SECTION *
 ****************/
// Mean function DONE
function getAverage(array) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  avg = (sum / array.length).toFixed(2);
  return avg;
}

// Median function DONE
function getMedian(array) {
  let halfIndex = Math.ceil(array.length / 2);
  let sortArray = sortByNumber(array);
  return sortArray[halfIndex];
}

function getMode(array) {
  return Math.mode(array);
}