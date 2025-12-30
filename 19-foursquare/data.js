const API_BASE_URL = "https://fictional-space-rotary-phone-v6wp946gq5gp3qpr-3001.app.github.dev";

async function search(lat, lng, query) {
    const ll = lat + "," + lng;
    const config = {
        "headers": {
            "Accept": "application/json"
        },
        "params": {
            ll,
            query,
            limit: 50,
            radius: 2000
        }

    };

    const response = await axios.get(API_BASE_URL + "/api/places/search", config);
    return response.data;
}

// the lat and lng parameters are the center point of the search
// the query will be the natural language query from the user
async function recommend(lat, lng, query) {
    const systemPrompt = `You are a professional travel advisor. Always respond with a raw JSON object without code fences or additional markup contain
    the following keys {"text": <string>, "locations":[
    {
     "name":<string>,
     "lat":<number>,
     "lng":<number>,
     "description":<strng>,
     "website_url":<string>
     "address":<string>
    }
    ]}
    
    the helpful travel advice should be in a narrative form giving a TLDR description of all the results. Only
    answer travel related questions close to latitude: ${lat} and longitude: ${lng} 
    `

    const response = await axios.post(API_BASE_URL + "/deepseek/chat/completions", {
        userMessage: query,
        systemMessage: systemPrompt
    })

    console.log(response.data);
    return response.data;
}