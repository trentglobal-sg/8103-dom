// purpose: create a leaflet map
// parameters: the starting lat lng, and the ID that will store the map
function initMap(lat, lng, mapElementID) {
    const coordinate = [lat, lng];
    const map = L.map(mapElementID);
    map.setView(coordinate, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    //     attribution: 'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
    // }).addTo(map);


    // create a search result layer which will show all the result markers later
    const searchResultLayer = L.layerGroup().addTo(map);

    return {
        "map": map,
        "searchResultLayer": searchResultLayer
    }

}

function displayResults(mapConfig, results) {

    const searchResultElement = document.querySelector("#search-results");
    searchResultElement.innerHTML = "";

    for (let location of results) {

        // for each location in the results, create a marker and add to the map
        const marker = L.marker([location.latitude, location.longitude]);
        marker.addTo(mapConfig.searchResultLayer);
        marker.bindPopup(`<h1 class="title">${location.name}</h1>
            <ul>
                <li>Address: ${location.location.formatted_address}</li>
                <li>Website: ${location.website}</li>
                <li>Phone: ${location.tel}</li>
            </ul>
        
        `)

        // create the search result and add it to the search result list
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');  // same as resultElement.className = 'result'
        resultElement.innerHTML = location.name;

        resultElement.addEventListener("click", function(){
            mapConfig.map.flyTo([location.latitude, location.longitude], 16);
            marker.openPopup();
        })

        searchResultElement.appendChild(resultElement);
    }
}