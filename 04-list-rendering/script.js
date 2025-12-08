let fruits = ["Apples", "Bananas", "Oranges"];

// Method 1
// for (let f of fruits) {
//     let fruitUl = document.querySelector("#fruits");
//     fruitUl.innerHTML = fruitUl.innerHTML + "<li>" + f + "</li>";
// }

// Method 1 - refined
let fruitUl = document.querySelector("#fruits");
for (let f of fruits) {
    fruitUl.innerHTML = fruitUl.innerHTML + `<li>${f}</li>`
}

let movies = ["Lord of the Rings", "Citizen's Kane", "Toy Story"];