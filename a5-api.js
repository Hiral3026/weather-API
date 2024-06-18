window.onload = function() {// Define the API endpoint and API key
const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "fe65364f65884fc5d27fcad3f682a99d";

// Get references to the buttons and output section
const torontoButton = document.getElementById("Toronto");
const yourtownButton = document.getElementById("Yourtown");
const outputSection = document.getElementById("output");

// Add event listeners to the buttons
torontoButton.addEventListener("click", function()  {
  getWeatherData("Toronto");
});

yourtownButton.addEventListener("click", function() {
  getWeatherData("Daman");
});

// Function to fetch weather data for a given city
function getWeatherData(city) {
  // Construct the API URL with the appropriate parameters
  const apiUrl = `${API_ENDPOINT}?q=${city}&units=metric&appid=${API_KEY}`;

  // Make the AJAX call to the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extract the relevant data from the response
      const location = data.name;
      const temperature = data.main.temp;
      const conditions = data.weather[0].description;
      const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const humidity = data.main.humidity;

      // Populate the output section with the data
      outputSection.style.display = "block";
      document.getElementById("location").textContent = location;
      document.getElementById("temperature").textContent = temperature + "°C";
      document.getElementById("conditions").textContent = conditions;
      document.getElementById("icon").innerHTML = `<img src="${iconUrl}" alt="${conditions}">`;
      document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
};