// DATA
let number = 101;

function increaseByOne() {
    if (number < 10) {
        number += 1;
    }
}

function decreaseByOne() {
    if (number > -10) {
        number -= 1;
    }
}

function setToZero() {
    number = 0;
}

// CONTROLLER
// The DOMContentLoaded event happens automatically when the
// web page is ready
document.addEventListener("DOMContentLoaded", function(){
    renderView();
})


let plusButton = document.querySelector("#plusButton");
plusButton.addEventListener("click", function(){
    increaseByOne();
    renderView();
});

document.querySelector("#minusButton").addEventListener("click", function(){
    decreaseByOne();
    renderView();
})

document.querySelector("#zeroButton").addEventListener("click", function(){
    setToZero();
    renderView();
})

// VIEW
// View corresponds to the Output (the O part of the EIPO)
function renderView() {
    let numberBox = document.querySelector("#number");
    numberBox.innerText = number;

    // change color
    if (number == 0) {
        numberBox.style.color = "black";
    } else if (number % 2 == 0) {
        numberBox.style.color = "green";
    } else {
        numberBox.style.color = "red";
    }
}