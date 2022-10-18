require('dotenv').config();
const keyWeatherApi=process.env.KEY;
const axios = require('axios');

async function weather() {
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${keyWeatherApi}&q=Paris&aqi=no`);
      console.log(`Il fait ${response.data.current.temp_c} degrés Celcius à Paris`);
    } catch (error) {
      console.error(error);
    }
  }

  weather();