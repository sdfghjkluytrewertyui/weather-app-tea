// index.js

const { getCurrentLocation } = require('./location-service');
const { getWeatherForecast } = require('./weather-forecast');

// Example usage
async function main() {
  try {
    const location = await getCurrentLocation();
    const weatherForecast = await getWeatherForecast(location.city);
    console.log('Weather forecast for', location.city + ':', weatherForecast);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

main();
