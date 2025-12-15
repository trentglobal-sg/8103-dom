const prompt = require('prompt-sync')();

// what primitive data types? 
// - strings, numbers (floats and integers), boolean
// what are the reference data types?
// - arrays and objects

// the name of the function: foobar
// the parameters: x and y
// the return value: x + y
function foobar(x, y) {
    return x + y;
}
console.log(foobar(3, 5));

let correctAnswer = Math.floor(Math.random() * 100 + 1);

// this while loop will run forever....
while (true) {
    // until it encounters a break
    break;
}

// this is a counting while loop
let guessMade = 0;
// for (let guessMade = 0; guessMade < 10; guessMade++) {
//     all the code below will go here
//}
while (guessMade < 10) {
    console.log("Guess Attempt: ", guessMade);
    let userGuess = parseInt(prompt("Enter your guess: "));
    if (userGuess == correctAnswer) {
        console.log("You got it correct!");
        break;
    } else if (userGuess < correctAnswer) {
        console.log("You guessed too low")
    } else {
        console.log("You guessed too high");
    }

    // if we are using independents if instead of if/else:
    if (userGuess == correctAnswer ) {
        console.log("You guessed correctly");
        break;
    }
    if (userGuess < correctAnswer) {
        console.log("You guessed too low");
    } 
    if (userGuess > correctAnswer) {
        console.log("You guessed too high");
    }

}