import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'
export const fetchData = async (country) =>{
    let changeableurl = url;
    if(country){
        changeableurl+=`/countries/${country}`
    }
    try {
        const {data:{confirmed,deaths,lastUpdate,recovered}} = await axios.get(changeableurl);        
        return {confirmed,deaths,lastUpdate,recovered};
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async()=>{
    try {
        const {data}  = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }))         

        return modifiedData 
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async()=>{
    try {
        const {data} = await axios.get(`${url}/countries`);
        const modifiedData = data.countries.map((country)=>(country.name))
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}