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

document.addEventListener("DOMContentLoaded", function () {
    const mapConfig = initMap(1.2938, 103.8540, "map");

    document.querySelector("#searchBtn").addEventListener("click", async function(){
        mapConfig.searchResultLayer.clearLayers();
       
        const searchTerms = document.querySelector("#searchTerms").value;
        const center = mapConfig.map.getBounds().getCenter();
        const data = await search(center.lat, center.lng, searchTerms);
        for (let location of data.results) {
            const marker = L.marker([location.latitude, location.longitude]);
            marker.addTo(mapConfig.searchResultLayer);
        }

    })

})