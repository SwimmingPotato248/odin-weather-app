const weatherAPI = "0070f8eef907c8ea7120be727b2e2418";

async function getWeather(location) {
  const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherAPI}`);
  return await weatherData.json();
}

getWeather('London');