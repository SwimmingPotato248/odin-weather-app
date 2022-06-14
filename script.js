const weatherAPI = "0070f8eef907c8ea7120be727b2e2418";

async function getWeather(location) {
  const weatherData = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherAPI}`
  );
  return await weatherData.json();
}

const btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  const searchQuery = document.getElementById("search-query");
  const weatherData = await getWeather(searchQuery.value);
  console.log(weatherData);
  showWeather(weatherData);
  searchQuery.value = "";
});

function showWeather(data) {
  setWeatherIcon(data.weather[0].icon);
  setDescription(data.weather[0].main);
  setTemp(data.main.temp);
  setFeelsLike(data.main.feels_like);
  setMinTemp(data.main.temp_min);
  setMaxTemp(data.main.temp_max);
  setHumidity(data.main.humidity);
  setVisibility(data.visibility);
  setWindSpeed(data.wind.speed);

}

function setWeatherIcon(icon) {
  document.querySelector(
    "#weather-icon img"
  ).src = `https://openweathermap.org/img/wn/${icon}.png`;
}

function setDescription(desc) {
  document.getElementById("description").textContent = desc;
}

function setTemp(temp) {
  const tempCelsius = parseFloat(temp, 10) - 273.15;
  document.getElementById("temperature").textContent = tempCelsius.toFixed(2);
}

function setFeelsLike(temp) {
  const tempCelsius = parseFloat(temp, 10) - 273.15;
  document.getElementById("feels-like").textContent = tempCelsius.toFixed(2);
}

function setMinTemp(temp) {
  const tempCelsius = parseFloat(temp, 10) - 273.15;
  document.getElementById("min-temp").textContent = tempCelsius.toFixed(2);
}

function setMaxTemp(temp) {
  const tempCelsius = parseFloat(temp, 10) - 273.15;
  document.getElementById("max-temp").textContent = tempCelsius.toFixed(2);
}

function setHumidity(humidity) {
  document.getElementById("humidity").textContent = humidity;
}

function setVisibility(visibility) {
  document.getElementById("visibility").textContent =
    parseInt(visibility) / 10000;
}

function setWindSpeed(speed) {
  document.getElementById("wind-speed").textContent = speed;
}


getWeather("London").then((data) => {
  const unixSunrise = data.sys.sunrise;
  const sunriseTime = new Date(unixSunrise * 1000);
  console.log(sunriseTime.toLocaleString());
});
