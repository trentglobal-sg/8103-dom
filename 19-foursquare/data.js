const API_BASE_URL = "https://fictional-space-rotary-phone-v6wp946gq5gp3qpr-3001.app.github.dev";

async function search(lat, lng, query) {
    const ll = lat + "," + lng;
    const config = {
        "headers": {
            "Accept": "application/json"
        },
        "params": {
            ll,
            query
        }

    };

    const response = await axios.get(API_BASE_URL + "/api/places/search", config);
    console.log(response.data);
    return response.data;
}