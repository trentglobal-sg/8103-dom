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

// step 1: select the DOM element (aka HTML element) that you want to add to
// (i.e select the container)
let movieUl = document.querySelector("#movies");

// step 2: use a for loop to iterate through the array
for (let m of movies) {
    // step 3: for each movie, create a <li></li> and add it to the container
    movieUl.innerHTML += `<li>${m}</li>`;
}

// METHOD 2: Use createElement and appendChild (better performance than method 1)
let titles = ["Lord of the Rings", "Romance of the Three Kingdoms", "Twilight"];

let titleUl = document.querySelector("#titles");
for (let t of titles) {
    // 1. create a new DOM element
    // the code creates a new <li> element
    let listItem = document.createElement("li");
    listItem.innerText = t;

    // 2. append the DOM element into its parent
    titleUl.appendChild(listItem);
}