function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [ randomLat, randomLng,];
}

document.addEventListener("DOMContentLoaded", function () {
    const map = L.map("map");
    map.setView([1.4304, 103.8354], 10);

    // Core central concept: Layer
    // A layer is an object that you can place on a map

    // The base layer of the map is the first layer to be rendered
    // The data comes from the tile layer

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // normally, the L.markerClusterGroup is not available but becuase we include marker cluster js, now it's available
    // all leaflet plugins usually add a new method to the `L` object.
    const markerClusterGroup = L.markerClusterGroup();
    markerClusterGroup.addTo(map);

    for (let i = 0; i < 500; i++) {
        const pos = getRandomLatLng(map);
        L.marker(pos).addTo(markerClusterGroup);
    }
});