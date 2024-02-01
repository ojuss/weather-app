const apiKey = 'f298acdc0a78372eaa58d3e2ae08ff40';
const cityName = "Panipat";

async function fetchWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=mertics&appid=${apiKey}`);

  const data = await response.json();
  console.log(data);
}

fetchWeather();