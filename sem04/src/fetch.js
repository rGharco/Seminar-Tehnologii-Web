async function get_country_bounds(country) {
    const url = `https://nominatim.openstreetmap.org/search?country=${country}&format=json`

    const response = await fetch(url);
    const data = await response.json();

    const minLat = data[0].boundingbox[0];
    const maxLat = data[0].boundingbox[1];
    const minLong = data[0].boundingbox[2];
    const maxLong = data[0].boundingbox[3];

    const countryBounds = [minLat, maxLat, minLong, maxLong];

    return countryBounds;
}

async function fetch_from_site() {
    const coodrinates = await get_country_bounds('Romania');

    const url = `https://opensky-network.org/api/states/all?lamin=${coodrinates[0]}&lamax=${coodrinates[1]}&lomin=${coodrinates[2]}&lomax=${coodrinates[3]}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);  
}

get_country_bounds(`Romania`);
fetch_from_site("https://opensky-network.org/api/states/all");