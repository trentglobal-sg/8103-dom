
document.addEventListener("DOMContentLoaded", async function () {
    const map = L.map("map");

    const singaporeLatLng = [1.2759, 103.8464];

    // tell the map to center on the lat lng
    map.setView(singaporeLatLng, 13);

    // Open Street Map
    const flatMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })

    flatMap.addTo(map); // default tile layer

    const satelliteMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
    });


    // read data from locations.json
    const response = await axios.get("https://gist.githubusercontent.com/trentglobal-sg/5be9184ab54eee87fe1e764a1b008d7d/raw/d850a140b1090ea823405d63585061db76b4a58b/locations.json");

    // create a layer group to store all the tourist hotspots
    const touristGroup = L.layerGroup();
    touristGroup.addTo(map);  // by default show the tourist group

    // tourist spots
    for (let place of response.data.tourist_spots) {
        const pos = [place.lat, place.lng];
        const marker = L.marker(pos);
        marker.bindPopup(`<h1>${place.name}</h1>`)
        marker.addTo(touristGroup);
    }

    const circleGroup = L.layerGroup();
    // circleGroup.addTo(map);

    // draw a couple of random circles on the map
    for (let i = 0; i < 5; i++) {
        const pos = getRandomLatLng(map);
        L.circle(pos, {
            fillColor: "orange",
            opacity: 0.5,
            radius: Math.floor(Math.random() * 1000) + 500
        }).addTo(circleGroup);
    }

    const baseLayer = {
        "2D map": flatMap,
        "Satellite map": satelliteMap
    }

    const overlays = {
        "Tourist Spots": touristGroup,
        "Circles": circleGroup
    }

    // creates a layer control
    // first parameter: base layers (radio button, select one at a time)
    // second parameter: can have zero or more than one active at a time
    L.control.layers(baseLayer, overlays).addTo(map);

    document.querySelector("#flatBtn")
        .addEventListener("click", function(){
            map.removeLayer(satelliteMap);
            map.addLayer(flatMap)
        })

    document.querySelector("#satelliteBtn")
        .addEventListener("click", function(){
            map.removeLayer(flatMap);
            map.addLayer(satelliteMap);
        });

    document.querySelector("#touristBtn")
        .addEventListener("click", function(){
           if (map.hasLayer(touristGroup)) {
            map.removeLayer(touristGroup);
           } else {
            map.addLayer(touristGroup);
           }
        })

})

function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [randomLat, randomLng,];
}