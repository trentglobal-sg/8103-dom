let url = "https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/sample-json-2.json";

let btn = document.querySelector("#showBtn");
btn.addEventListener("click", async function () {
    let response = await axios.get(url);
    let contact = response.data;
    let outputDiv = document.querySelector("#output");
    outputDiv.innerHTML = `
        <ul>
            <li>First Name:${contact.firstName}</li>
            <li>Last Name:${contact.lastName}</li>
            <li>Street Address:${contact.address.streetAddress}</li>
            <li>City:${contact.address.city}</li>
            <li>State:${contact.address.state}</li>
            <li>Postal Code:${contact.address.postalCode}</li>

        </ul>
    
    `
})

async function main() {

}
main();