
document.addEventListener("DOMContentLoaded", async function () {
    const map = L.map("map");

    const singaporeLatLng = [1.2759, 103.8464];

    // tell the map to center on the lat lng
    map.setView(singaporeLatLng, 13);

    // Open Street Map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const response = await axios.get("https://gist.githubusercontent.com/trentglobal-sg/5be9184ab54eee87fe1e764a1b008d7d/raw/d850a140b1090ea823405d63585061db76b4a58b/locations.json");
    console.log(response.data);
    for (let place of response.data.tourist_spots) {
        const pos = [place.lat, place.lng];
        const marker = L.marker(pos);
        marker.bindPopup(`<h1>${place.name}</h1>`)
        marker.addTo(map);
        
    }

})





