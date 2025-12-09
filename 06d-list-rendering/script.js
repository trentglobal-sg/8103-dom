

// DOMContentLoaded function is automatically triggered on the document
// when the document is ready (i.e finished loading)
document.addEventListener("DOMContentLoaded", async function () {
    let response = await axios.get('books.json');
    let books = response.data;
    renderList(books);
})

// we put the list rendering into a function
// why? maybe we may want to change the books array and then do a-render
function renderList(books) {
    let bookUl = document.querySelector("#books");
    // remove all its existing children
    // why: we may call renderList more than once
    bookUl.innerHTML = "";

    for (let b of books) {
        let liElement = document.createElement('li');
        liElement.innerText = `${b.title} by ${b.author} (${b.pages} pages)`
        bookUl.appendChild(liElement);
    }
}