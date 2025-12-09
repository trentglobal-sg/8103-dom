let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt";

async function main() {
    // because axios.get is an asynchronous function, it returns a promise
    let promise = axios.get(url);
    // await means: wait for the promise then get the return value of the promise
    let response = await promise;  // <-- will wait till promise to finish before contuining with the function
    console.log(response.data);
    let fruitUl = document.querySelector("#fruits");
    let fruits = response.data.trim().split("\n");
    for (let f of fruits) {
        let liElement = document.createElement('li');
        liElement.innerText = f;
        fruitUl.appendChild(liElement);
    }
}

main();
for (let i = 0; i < 10; i++) {
    console.log(i);
}