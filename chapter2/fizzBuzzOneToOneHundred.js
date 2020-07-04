let currentNumber = 1;
let output = "";

while(currentNumber < 101){

    let divisibleByThree = currentNumber % 3 === 0;
    let divisibleByFive = currentNumber % 5 === 0;

    if(divisibleByThree){
        output = "Fizz";
    }

    if(divisibleByFive){
        output += "Buzz";
    }

    if(!divisibleByThree && !divisibleByFive){
       output = currentNumber;
    }

    console.log(output);
    output = "";
    currentNumber++;
}