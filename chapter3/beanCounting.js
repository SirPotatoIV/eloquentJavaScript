// Your code here.
const countBs = function(countMeForB){
    let bCount = 0;
    for(let i = 0; i < countMeForB.length; i++){
      if(countMeForB[i] === "B"){
        bCount++;
      }
    }
    return(bCount)
  }
  
  const countChar = function(countMe, letterToCount){
    let countOfLetter = 0;
    for(let i = 0; i < countMe.length; i++){
      if(countMe[i] === letterToCount){
        countOfLetter++;
      }
    }
    return(countOfLetter)
  }
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4