// DECODED LOCATION LIBRARY

/* INDEX
1. displayWeather
2. findweather
3. storeWeatherData
4. weatherMessage
*/

// 1. displayWeather
function weather(lat,lon) {
  // Run "findWeather" function
  findWeather(lat,lon,displayWeatherData);
}

// 2. findWeather [USE OPENWEATHER API TO FIND WEATHER]
function findWeather(lat,lon,callback) {
  // Store weather JSON data in "weather" variable
  var weather = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon;
  $.ajax({
    dataType: "jsonp",
    url: weather,
    success: callback
  });
}

// 3. displayWeatherData [STORE WEATHER DATA]
function displayWeatherData(data){
  // a. Store current weather in "currentWeather" variable
  var currentWeather = data.weather[0].description;
  // b. Change message to display current weather data
  weatherMessage("The current weather is " +currentWeather);
}

// 4. weatherMessage [CUSTOMISE WEATHER MESSAGE]
function weatherMessage(newContent) {
  // a. Use the jQuery library function ".html" to change the content of the paragraph element with an id of "weather"
  $('p#weather').html(newContent);
  // b. Confirm function has worked by sending "Weather Message Changed" text to the browser console
  console.log("Weather Message Changed");
}
