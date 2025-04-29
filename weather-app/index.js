const apiKey = "40443cedb773b5bc046020d4b2ea05f2";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value.trim();
  if (cityValue) {
    getWeatherData(cityValue);
  }
});

async function getWeatherData(cityValue) {
  weatherDataEl.style.display = "block";
  weatherDataEl.querySelector(".icon").innerHTML = "";
  weatherDataEl.querySelector(".temperature").textContent = "";
  weatherDataEl.querySelector(".description").textContent = "Loading...";
  weatherDataEl.querySelector(".details").innerHTML = "";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityValue
      )}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const description =
      data.weather[0].description.charAt(0).toUpperCase() +
      data.weather[0].description.slice(1);
    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];

    weatherDataEl.querySelector(
      ".icon"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">`;
    weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
    weatherDataEl.querySelector(".description").textContent = description;
    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatherDataEl.querySelector(".description").textContent = error.message;
    weatherDataEl.querySelector(".description").style.color = "red";
  }
}
