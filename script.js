import {apiKey} from './api.js';

async function fetchWeather (cityName) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`);

  const data = await response.json();
  console.log(data);
  updateWeather(data);
}

const inputElement = document.querySelector('.input-city');
const buttonElement = document.querySelector('.input-btn');
const cityElement = document.querySelector('.city-name');
const tempElement = document.querySelector('.temp');
const humidElement = document.querySelector('.humidity');
const windElement = document.querySelector('.wind-speed');

function updateWeather (data) {
    cityElement.innerHTML = `Weather in ${data.name}`;
    tempElement.innerHTML = `${data.main.temp}`;
    humidElement.innerHTML = `Humidity : ${data.main.humidity}%`;
    windElement.innerHTML = `Wind Speed : ${data.wind.speed}`;
}

buttonElement.addEventListener('click', () => {
  const cityName = inputElement.value;
  fetchWeather(cityName);
});