document.addEventListener("DOMContentLoaded", async function () {
    let singapore = [1.29, 103.85]; // #1 Singapore latlng
    let map = L.map('map').setView(singapore, 13); // #2 Set the center point

    // setup the tile layers
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let coordinate = [1.2816, 103.8636];
    let marker = L.marker(coordinate);
    marker.addTo(map);

    let response = await axios.get("dengue.geojson");
    let geojson = response.data;
    L.geoJSON(geojson).addTo(map);

})



