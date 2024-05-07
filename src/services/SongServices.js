const url = 'https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=2024-05-07';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '82943f9329msh3c5fb58ad3cb945p1ad68ejsnb96bf9f87237',
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
