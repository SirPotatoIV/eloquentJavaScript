// Your code here.
const range = function(start, end){
  // binding to store range of numbers
  let rangeOfNumbers = [];
  // binding to increment numbers to create rage of numbers
  let currentNumber = start;
  
  // loop to increment start by 1 until end of range is reached
  for(let i=start; i <= end; i++){
    // add current number to array
    rangeOfNumbers.push(currentNumber);
    // increment current number
    currentNumber++;
  }
  return(rangeOfNumbers)
}

const sum = function(rangeToSum){
  // binding to increment as range is looped through
  let sumOfRange = 0;
  
  // loop through all the entries in rangeToSum
  for(let entry of rangeToSum){
    // add current entry to sumOfRange to caluculate sum
    sumOfRange = sumOfRange + entry;
  }
  
  return sumOfRange
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// =====================================================
// Need to go back and figure out how to handle this part
//======================================================
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55