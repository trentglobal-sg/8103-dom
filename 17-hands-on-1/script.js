
document.addEventListener("DOMContentLoaded", async function () {

    async function drawTaxiMarkers() {
         // clear all the existing markers from the marker cluster layer
        console.log("new markers added");
        markerClusterLayer.clearLayers();
        const taxiURL = "https://api.data.gov.sg/v1/transport/taxi-availability";
        const response = await axios.get(taxiURL);
        for (let pos of response.data.features[0].geometry.coordinates) {
            const latLng = [pos[1], pos[0]]
            const marker = L.marker(latLng);
            marker.addTo(markerClusterLayer);
        }
    }

    setInterval(drawTaxiMarkers, 31000);

    const map = L.map("map");
    const singaporeLatLng = [1.2759, 103.8464];

    // tell the map to center on the lat lng
    map.setView(singaporeLatLng, 13);

    // Open Street Map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const markerClusterLayer = L.markerClusterGroup();
    markerClusterLayer.addTo(map);
    drawTaxiMarkers();

    
})



