// Your code here.

function arrayToList(numbers){
	let list = {}
	let currentItem = {};
  	for(let i=0; i < numbers.length; i++){
    	// if this is the first number in the array, add the first value and set current value equal to the rest property
      	if(!list.value){
        	list.value = numbers[i];
          	list.rest = currentItem;
        }
      	// if there are still more numbers in the array, set the value and set rest equal to a new object
      	if(numbers[(i+1)]){
        	currentItem.value = numbers[i];
          	currentItem.rest = {};
          	currentItem = currentItem.rest;
        }
        // if there are no numbers remaining in the array, set the value and set rest equal to null.
      	else{
        	currentItem.value = numbers[i];
          	currentItem.rest = null;
        }
     }
  return list
}

function listToArray(list){

}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20