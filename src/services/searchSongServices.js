const BASE_URL = "https://spotify23.p.rapidapi.com";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '39a0d91ab0mshfd3ce22ccd1f0eep1966dcjsnb06289877896',
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