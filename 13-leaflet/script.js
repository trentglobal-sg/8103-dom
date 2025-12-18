// L is a global object from the Leaflet javascript
// L.map is a method that creates a Leaflet map
// it takes one parameter - the id of the element that
// will contain the map
const map = L.map("map");
// latlng coordinates are stored as an array 
// the first element is the lat, the second element is lng
const singaporeLatLng = [1.2759, 103.8464];

// tell the map to center on the lat lng
map.setView(singaporeLatLng, 13);

// Open Street Map
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// Satetille map
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
}).addTo(map);

// add a marker
const marker = L.marker([1.2725, 103.8408]);
marker.addTo(map);

marker.bindPopup(`<p>International Plaza(?)</p>`);

const zooMarker = L.marker([1.403782, 103.79414]);
zooMarker.addTo(map);
zooMarker.addEventListener("click", function(){
    alert("Mandai Zoo");
});

// the event parameter will contain all the info about the event
map.on('dblclick', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    const marker = L.marker([lat, lng]);
    marker.addTo(map);
})

const circle = L.circle([1.3484, 103.7767], {
    fillColor: "red",
    color: "brown",
    opacity: 0.5,
    radius: 2000
});
circle.addTo(map);