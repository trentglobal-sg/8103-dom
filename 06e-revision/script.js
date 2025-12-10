// await must be used in an asynchronous function
async function loadData() {
    // if we break into two lines:
    // let pendingResponse = axios.get("data.json"); <-- axios.get will return a promise
    // let response = await pendingResponse;

    let response = await axios.get("pets.json");    
    return response.data; // <-- axios will always store the data in response.data
}

function renderList(pets) {
    let petUl = document.querySelector("#pets");
    for (let p of pets) {
        let liElement = document.createElement('li');
        let className = "";
        if (p.breed == "dog" || p.breed == "cat") {
            className = p.breed;
        } else {
            className = "others";
        }

        liElement.innerHTML = `<span class=${className}>
                                ${p.name} (${p.breed})
                                </span>`

        petUl.appendChild(liElement);
    }
}

// DOMContentLoaded is an event
// When will that event happen? When the page loads and is ready
// It makes the perfect starting point for a "start" or "main" function
document.addEventListener("DOMContentLoaded", async function(){
    let data = await loadData();
    console.log(data);
    renderList(data.pets);
})