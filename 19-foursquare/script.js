

document.addEventListener("DOMContentLoaded", function () {
    const mapConfig = initMap(1.2938, 103.8540, "map");

    document.querySelector("#searchBtn").addEventListener("click", async function () {
        // remove all the existing markers from the search result layer
        mapConfig.searchResultLayer.clearLayers();

        // try/catch is for error handling (aka exception handling)
        // if any lines in a try block crashes
        // Javascript will go the first line in the catch block
        try {
            const searchTerms = document.querySelector("#searchTerms").value;
            // get the center point of the map
            const center = mapConfig.map.getBounds().getCenter();
            // call the search function in data.js (which will in turn consume our backend endpoint)
            const data = await search(center.lat, center.lng, searchTerms);
           displayResults(mapConfig, data.results);
        } catch (e) {
            alert("Unable to fetch FourSquare Results");
            console.log(e);
            console.error("Unable to fetch Foursquare search results");
        }




    })

})