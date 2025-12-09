let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt";

// get the data from the url
// HOWEVER, axios.get won't return the data. It returns a PROMISE
// A promise is a function call that it takes a long time to finish
// but will eventually finish and returns a result
let promise = axios.get(url);
console.log(promise)
// how do something when the promise finishes?
// when the promise finishes execution, THEN the
// function in the parameter will be called
// and the promise's return value will be passed to the function
promise.then(function(response){
    console.log("Data recieved");
    // console.log(response.data);
    let dataDiv = document.querySelector("#data");
    dataDiv.innerHTML = response.data;

    // create an array from the string, using newline
    // as the seperator
    let fruits = response.data.trim().split('\n');
    let fruitUl = document.querySelector("#fruits");
    for (let f of fruits) {
        let liElement = document.createElement("li");
        liElement.innerText = f;
        fruitUl.appendChild(liElement)
    }
});
for (let i = 0; i < 10; i++) {
    console.log(i);
}