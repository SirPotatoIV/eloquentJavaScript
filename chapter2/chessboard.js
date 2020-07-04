// console.log(` # # # #\n# # # # \n`)
// Well be continually added to
let chessBoardString = "";
// Stores the string for the current loop
let currentBoardString = "";
// used to decide if the first character should be a space
let startsWithASpace = true;
// stores  the size of the boards length/width
let size = 3;


// create a string of # that contains the same number of # as the binding size value
for(let i = 0; i < size; i++){
    // -- the first string should start with a space
    if(startsWithASpace){
        currentBoardString += " ";
    }
    // -- -- every other should not start with a space
    startsWithASpace = !startsWithASpace;
    // repeat for the number of times that the binding size is equal to
    for(let j = 0; j < size; j++){
    // -- there should be a space between each #
      currentBoardString += "# ";
    }
    // -- the string should end with a \n
    currentBoardString += "\n";
    // add the created string to a global variable that will be built on
    chessBoardString += currentBoardString;
    // restarts the string that is being built to an empty string
    currentBoardString = "";
}
console.log(chessBoardString);
