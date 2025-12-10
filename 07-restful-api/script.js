async function loadData(pokemon) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    return response.data;
}

// when the DOM is ready, call the following function
document.addEventListener("DOMContentLoaded", async function(){
    // let data = await loadData("pikachu");
    // console.log("pikachu data =", data);

    // let charmanderData = await loadData("charmander");
    // console.log("charmander data =", charmanderData);
    const searchButton = document.querySelector("#searchBtn");
    searchButton.addEventListener("click", async function(){
        const pokemonTxt = document.querySelector("#pokemon");
        const pokemon = pokemonTxt.value;
        const data = await loadData(pokemon);
        console.log(data);
        // OUTPUT
        // select the div#results
        const resultDiv = document.querySelector("#results");
        resultDiv.innerHTML = `
            <ul>
                <li>Name: ${data.name}</li>
                <li>Weight: ${data.weight}kg</li>
                <li>
                    <img src="${data.sprites.other["official-artwork"].front_default}"/>
                </li>
                <li>
                    <ul>
                        ${renderAbilities(data.abilities)}
                    </ul>
                </li>
            </ul>
        `
    })
})

function renderAbilities(abilities) {
    let bufferString = "";
    for (let a of abilities) {
        bufferString += `<li>${a.ability.name}</li>`
    }
    return bufferString;
}