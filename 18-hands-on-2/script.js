

document.addEventListener("DOMContentLoaded", async function () {
    const map = L.map("map");
    const singaporeLatLng = [1.2759, 103.8464];

    // tell the map to center on the lat lng
    map.setView(singaporeLatLng, 13);

    // Open Street Map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    // we are using relative URL?
    // relative to the URL of script.js
    const hdbResponse = await axios.get("data/hdb.json");
    const hdb = hdbResponse.data;

    const mallResponse = await axios.get("data/malls.json");
    const malls = mallResponse.data;

    const natureResponse = await axios.get("data/nature.json");
    const nature = natureResponse.data;

    // If you want to load concurrently
    // const hdbPromise = axios.get("data/hdb.json");
    // const mallPromise = axios.get("data/malls.json");
    // const naturePromise = axios.get("data/nature.json");

    // const hdbResponse = await hdbPromise;
    // const mallResponse = await mallPromise;
    // const natureResponse = await naturePromise;

    // const hdb = hdbResponse.data;
    // const malls = mallResponse.data;
    // const nature = natureResponse.data;

    // console.log(hdb);
    // console.log(malls);
    // console.log(nature);

    const hdbLayer = L.layerGroup();
    const mallLayer = L.layerGroup();
    const natureLayer = L.layerGroup();

    hdbLayer.addTo(map);
    map.addLayer(mallLayer);  // does the same thing as .addTo(map)
    natureLayer.addTo(map);

    function addToLayer(data, layer) {
        for (let place of data) {
            const marker = L.marker([place.coordinates[0], place.coordinates[1]]);
            marker.bindPopup(`<h1>${place.name}</h1>`);
            marker.addTo(layer);
        }
    }

    addToLayer(hdb, hdbLayer);
    addToLayer(malls, mallLayer);
    addToLayer(nature, natureLayer);

    // code without using function:
    // for (let h of hdb) {
    //     const marker = L.marker([h.coordinates[0], h.coordinates[1]]);
    //     marker.bindPopup(`<h1>${h.name}</h1>`);
    //     marker.addTo(hdbLayer);
    // }

    // for (let m of malls) {
    //     const marker = L.marker([m.coordinates[0], m.coordinates[1]]);
    //     marker.bindPopup(`<h1>${m.name}</h1>`);
    //     marker.addTo(mallLayer);
    // }

    // for (let n of nature) {
    //     const marker = L.marker([n.coordinates[0], n.coordinates[1]]);
    //     marker.bindPopup(`<h1>${n.name}</h1>`);
    //     marker.addTo(natureLayer);
    // }

    const baseLayers = {
        "HDB": hdbLayer,
        "Malls": mallLayer,
        "Nature": natureLayer
    }

    L.control.layers(baseLayers, {}).addTo(map);

})



