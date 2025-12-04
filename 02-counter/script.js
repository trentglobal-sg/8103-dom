let plusButton = document.querySelector("#plusButton");
plusButton.addEventListener("click",function(){
    // when working with DOM, we SELECT, then we MODIFY
    let numberBox = document.querySelector("#number");

    // take the current innerText from the number box
    let currentNumber = parseInt(numberBox.innerText);
    // increase by 1
    currentNumber += 1;
    // set the innerText to the new current number
    numberBox.innerText = currentNumber;

});

let zeroButton = document.querySelector("#zeroButton");
zeroButton.addEventListener("click", function(){
    alert("Zero button clicked");
})

let minusButton = document.querySelector("#minusButton");
minusButton.addEventListener("click", function(){
    alert("Minus button clicked");
})