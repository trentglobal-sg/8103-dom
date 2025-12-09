async function main() {
    // use a relative URL to read the JSON file
    // when we run JavaScript and we uses a relative URL
    // then it's relative to the address in the address bar of the browser
    let response = await axios.get("book.json");
    console.log(response.data);
    console.log(response.data.title);
    console.log(response.data.author);
    console.log(response.data.pages);

    let titleSpan = document.querySelector("#title");
    titleSpan.innerText = response.data.title;
    document.querySelector("#author").innerText = response.data.author;
    document.querySelector("#pages").innerText = response.data.pages;

    let bookInfoUl = document.querySelector("#book-info");
    bookInfoUl.innerHTML = `
        <li>Title: ${response.data.title}</li>
        <li>Author: ${response.data.author}</li>
        <li>Pages: ${response.data.pages}</li>
    `

}

main();