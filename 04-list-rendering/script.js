let fruits = ["Apples", "Bananas", "Oranges"];

// Method 1
// for (let f of fruits) {
//     let fruitUl = document.querySelector("#fruits");
//     fruitUl.innerHTML = fruitUl.innerHTML + "<li>" + f + "</li>";
// }

// Method 1 - refined
let fruitUl = document.querySelector("#fruits");
for (let f of fruits) {
    fruitUl.innerHTML = fruitUl.innerHTML + `<li class="fruit">${f}</li>`
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
    listItem.className = "book"; // add the book class to the element

    // 2. append the DOM element into its parent
    titleUl.appendChild(listItem);
}

// METHOD 3: Using createElement with innerHTML
let clothings = ["Shirt", "Dress", "Jeans"];

// document.querySelector will return an EXISTING DOM element
// document.createElement will return a NEW DOM element
// document.querySelectorAll will return an ARRAY of EXISTING DOM elements

let clothingUl = document.querySelector("#clothings");

for (let c of clothings) {
    let listElement = document.createElement('li');
    listElement.innerHTML = `<span class="clothing">${c}</span>`;
    clothingUl.appendChild(listElement);
}

// METHOD 4: insertAdjacentHTML
let vehicles = ["Car", "Tank", "Aircraft Carrier"];
let vehicleUl = document.querySelector("#vehicles");

for (let v of vehicles) {
    // two parameters for insertAdjacentHTML
    // first parameter: the position
    vehicleUl.insertAdjacentHTML("beforeend", `<li class="vehicle">${v}</li>`)
}

// LIST RENDERING AN ARRAY OF OBJECTS USING METHOD 3
let contacts = [
    {
        "id": 1,
        "name": "Tan Ah Kow",
        "email": "tanahkow@asd.com"
    },
    {
        "id": 2,
        "name": "Jon Snow",
        "email": "jon@asd.com"
    },
    {
        "id": 3,
        "name": "Melvin Loh",
        "email": "melvin@asd.com"
    }
]

// step 1: select the container that we add elements to
// (aka select the container that will display the list)
let contactUl = document.querySelector("#contacts");
for (let c of contacts) {
    let liElement = document.createElement('li');
    liElement.innerHTML = `
        <span class="name">${c.name}</span>
        <span class="info">(id:${c.id}, email:${c.email})
    `
    contactUl.appendChild(liElement);
}

let expenses = [
    {
        "id": 1,
        "amount": 200,
        "description": "New cable modem"
    },
    {
        "id": 2,
        "amount": 999,
        "description": "Playstation 5"
    },
    {
        "id": 3,
        "amount": 2000,
        "description": "Flatscreen TV"
    }
]

let expenseUl = document.querySelector("#expenses");
for (let e of expenses) {
    let liElement = document.createElement('li');
    liElement.innerHTML = `
        <div>
            <span>${e.description}</span>
            <ul>
                <li>ID: ${e.id}</li>
                <li>Amount: ${e.amount}</li>
            </ul>
        </div>
    `
    expenseUl.appendChild(liElement);

}