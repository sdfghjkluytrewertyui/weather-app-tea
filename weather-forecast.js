// weather-forecast.js

const { fetchWeatherData } = require('./weather-api');

async function getWeatherForecast(city) {
  try {
    const weatherData = await fetchWeatherData(city);
    // Process weather data and return forecast
    return weatherData;
  } catch (error) {
    console.error('Error getting weather forecast:', error.message);
    throw error;
  }
}

module.exports = {
  getWeatherForecast
};
