const BASE_URL = "https://spotify23.p.rapidapi.com";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '68d9c459e9mshf26d390bc2a7d7cp135d11jsn1ff40dd3f6de',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

const getSong = async (song) => {
    const url = `${BASE_URL}/search/?q=${song}&type=multi&offset=10&limit=100&numberOfTopResults=10`;
    // 
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return (result.tracks.items);

    } catch (error) {
        console.error(`error ${error} desde la peticion`);
    }
};


export { getSong };