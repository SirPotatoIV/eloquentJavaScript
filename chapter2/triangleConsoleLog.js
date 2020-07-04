let currentString = "#";
let count = 0;

// console log the binding currentString while count is less than 7
// do allows me to run the code once before checking the condition 
do{
    console.log(currentString);
    // the plus operator performs concantination if it's used with a string
    currentString += "#";
    // the same as count = count + 1;
    // this is called updating succinctly
    count++;
} while(count < 7);