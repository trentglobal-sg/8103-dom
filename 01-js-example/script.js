console.log("hello world");

let btn = document.querySelector("#changeBtn");
// events are actions that the user perform on the webpage
// example events: click, hover select, move, scroll up, scroll down
btn.addEventListener("click", function () {
    // string is an object
    // object has data and functions
    let s = "the quick brown fox jumps over the lazy dog";
    console.log(s.toLowerCase());

    // we access the DOM using document
    // what is the data of the document? The CSS and HTML
    // it has function to select and add/modify HTML elements

    // querySelector can select an element and return it
    // as a DOM object (aka DOM element)
    let heading = document.querySelector("h1");
    heading.style.backgroundColor = "yellow";

    // select the h2 and change its font family
    // when changing the css, we must use camelCase to
    // refer to the properties
    let heading2 = document.querySelector("h2");
    heading2.style.fontFamily = "Verdana";

    // to select by id, use #
    // eg: select the element with id "skills"
    let skills = document.querySelector("#skills");
    skills.style.border = "1px solid black";

    // querySelector will only select the first one
    let expertSkill = document.querySelector(".expert");
    expertSkill.style.backgroundColor = "yellow";

    // document.querySelectorAll will return all elements
    // that matches and it will return as an array
    let allExpertSkills = document.querySelectorAll(".expert");
    console.log(allExpertSkills);

    // use a for loop to extract one element at a time from
    // the array and change their color to red
    for (let skill of allExpertSkills) {
        skill.style.color = "red";
    }

    let link = document.querySelector("#search");
    link.href = "https://www.bing.com";
    link.innerText = "Bing";
})

