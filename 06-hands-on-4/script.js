document.addEventListener("DOMContentLoaded", async function () {
    let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json";
    let response = await axios.get(url);
    console.log(response.data);
    renderList(response.data.users);
    // let userUl = document.querySelector("#users");

    // for (let u of response.data.users) {
    //     let liElement = document.createElement('li');
    //     liElement.innerHTML = `${u.firstName} ${u.lastName} (${u.emailAddress})`
    //     userUl.appendChild(liElement);
    // }
})

function renderList(users) {
    let userUl = document.querySelector("#users");
    userUl.innerHTML = ""; // clear all children in case we call renderList multiple time
    for (let u of users) {
        let liElement = document.createElement('li');
        liElement.innerHTML = `${u.firstName} ${u.lastName} (${u.emailAddress})`
        userUl.appendChild(liElement);
    }
}