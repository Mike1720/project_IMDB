const url = 'https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=2024-05-07';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '39a0d91ab0mshfd3ce22ccd1f0eep1966dcjsnb06289877896',
        'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
    }
}

export const getData = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.chart.entries
    } catch (error) {
        console.error(`error ${error} desde la peticion`);
    }
}
