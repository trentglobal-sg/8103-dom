

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




    });

    document.querySelector("#recommendBtn").addEventListener("click", async function(){
        try {
            const recommendTerms = document.querySelector("#recommend-terms").value;
            const center = mapConfig.map.getBounds().getCenter();
            const response = await recommend(center.lat, center.lng, recommendTerms);
            displayRecommendations(mapConfig, response.locations);
        } catch (e) {
            alert("Unable to get recommendations from DeepSeek, please try again");
            console.error(e);
        }
    })


    // interaction for the tabs
    const tabBtns = document.querySelectorAll(".tab-btn");
    for (let btn of tabBtns) {
        btn.addEventListener("click", function(){
            const tabName = btn.getAttribute("data-tab");

            // remove the active class from all the buttons
            for (let btn of tabBtns) {
                btn.classList.remove('active');
            }

            // add back the active class
            btn.classList.add('active');

            // select all the tabs
            const allTabs = document.querySelectorAll('.tab-content');
            for (let t of allTabs) {
                // remove the active class from all the tabs
                t.classList.remove('active');
            }

            // if the user clicks on the `recommend` button
            // we will set active the `#recommend-tab` element
            let activeTab = document.querySelector("#" + tabName + "-tab");
            activeTab.classList.add('active');
        })
    }



})