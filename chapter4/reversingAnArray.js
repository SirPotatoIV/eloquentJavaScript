function reverseArray(arrayToReverse){
  const resversedArray = [];
  for(entry of arrayToReverse){
      resversedArray.unshift(entry);
  }
  return(resversedArray)
}

// Found out this was the cheating way once I read the answer :(
const reverseArrayInPlace = arrayValue => {
    const arrayValueCopy = [...arrayValue];
    let currentIndex = arrayValue.length - 1;
    for(let i = 0; i < arrayValue.length; i++){
        arrayValue[i] = arrayValueCopy[currentIndex];
        currentIndex--;
    }
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]