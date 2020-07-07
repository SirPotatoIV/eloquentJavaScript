// Your code here.
const min = function(number1, number2){
    // check to see if number 1 is smaller
    if(number1 < number2){
     return number1
    }else{
      // only other possiblity is that number 2 is the min
      return number2
    }
  };
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10