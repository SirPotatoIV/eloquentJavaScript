// Your code here.
const isEven = function(numberToTest){

    // if the numberToTest is 0, then the original number was even
    if(numberToTest === 0){
      return(true)
    }
    // if the numberToTest is 1, then the original number was odd
    if(numberToTest === 1){
      return(false)
    }
    //Keep subtracting 2 until you get to either 1 or 0; 
    const nextNumber = numberToTest - 2;
    // return a call to the function itself
    return isEven(nextNumber);
  }
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??