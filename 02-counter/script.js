let plusButton = document.querySelector("#plusButton");
plusButton.addEventListener("click", function () {
    // when working with DOM, we SELECT, then we MODIFY
    let numberBox = document.querySelector("#number");

    // take the current innerText from the number box
    let currentNumber = parseInt(numberBox.innerText);
    if (currentNumber < 10) {
        // increase by 1
        currentNumber += 1;
    }
    // set the innerText to the new current number
    numberBox.innerText = currentNumber;
    if (currentNumber == 0) {
        numberBox.style.color = "black"
    }
    else if (currentNumber % 2 == 1) {
        numberBox.style.color = "red";
    }
    else if (currentNumber % 2 == 0) {
        numberBox.style.color = "green";
    }

});

let zeroButton = document.querySelector("#zeroButton");
zeroButton.addEventListener("click", function () {
    let numberBox = document.querySelector("#number");
    numberBox.innerText = 0;
    numberBox.style.color = "black";
})

let minusButton = document.querySelector("#minusButton");
minusButton.addEventListener("click", function () {
    let numberBox = document.querySelector("#number");
    let currentNumber = numberBox.innerText;
    if (currentNumber > -10) {
         currentNumber -= 1;
    }
    numberBox.innerText = currentNumber;

    if (currentNumber == 0) {
        numberBox.style.color = "black"
    }
    else if (currentNumber % 2 == 1) {
        numberBox.style.color = "red";
    }
    else if (currentNumber % 2 == 0) {
        numberBox.style.color = "green";
    }
})