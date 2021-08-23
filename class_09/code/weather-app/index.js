function waitForData(res) {
  return res.json();
}

function displayData(data) {
  let main = data.main;

  // Humidity
  let humidity = `Humidity: ${main.humidity}%`;
  let humidityParagraph = document.querySelector("p.humidity");
  humidityParagraph.innerHTML = humidity;

  // Temperature
  let temp = `Temperature: ${main.temp} degrees`;
  let tempPara = document.querySelector("p.temp");
  tempPara.innerHTML = temp;

  // Winds
  let windsPara = document.querySelector("p.winds");
  windsPara.innerHTML = `Wind: ${data.wind.speed} km/h`;

  // Description
  let weather = data.weather[0].description;
  let weatherP = document.querySelector("p.description");
  weatherP.innerHTML = `Weather: ${weather}`;
}

function getWeather(location) {
  let apiKey = "7dfe309afec3ee637c6130947b96f76b";
  let baseURL = `https://api.openweathermap.org/data/2.5/weather`;
  let queryString = `?q=${location}&appid=${apiKey}&units=metric`;
  let url = baseURL + queryString;

  fetch(url, {
    method: "GET",
  })
    .then(waitForData)
    .then(displayData);
}

let form = document.querySelector("form");

function onFormSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("input");
  let search = input.value;
  getWeather(search);
}

form.addEventListener("submit", onFormSubmit);
