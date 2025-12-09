let url = "https://4geeksacademy.github.io/exercise-assets/txt/hello.txt";
async function  main() {
    let response = await axios.get(url);
    console.log(response.data);
    let body = document.querySelector("#content");
    body.innerHTML = `<h1>${response.data}</h1>`;
}
main();