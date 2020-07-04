let currentNumber = 1;

while(currentNumber < 101){
    if((currentNumber % 3) === 0){
        console.log("Fizz")
        currentNumber++;
        continue
    }
    if((currentNumber % 5) === 0){
        console.log("Buzz");
        currentNumber++;
        continue
    }
    console.log(currentNumber)
    currentNumber++;
}