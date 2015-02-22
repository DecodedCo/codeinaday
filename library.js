// DECODED LIBRARY FOR LOCATION APP
// CONTENTS

// 1. allowCheckin
// 2. calculateDistance
// 3. canUserCheckin
// 4. changeMessage
// 5. denyCheckin
// 6. getDistanceFromLatLonInKm
// 7. trackError
// 8. trackSuccess
// 9. trackUserLocation
// 10. weatherDisplay

// SHOW FORM TO ALLOW CHECKIN
function allowCheckin() {
    // 1. Use the jQuery library function ".show" to display the form and allow check in
    $("form").show();
    // 2. Confirm function has worked by sending "Allow Check In" text to the browser console
    console.log("Allow Check In");
}

// CALCULATE THE DISTANCE BETWEEN USER AND TARGET
// This function requires a target latitude (lat), a target longitude (lon)
function calculateDistance(lat,lon) {
    // This code checks that tracking was succesful
    if(typeof userPosition != "undefined") {
        // 1. The function "getDistanceFromLatLonInKm" is now run using the stored location data for target and user
        getDistanceFromLatLonInKm(lat,lon,userLat,userLon);
        // 2. Confirm function has worked by sending the distance value stored in "distance" to the browser console
        console.log("The user is " +distance+ "km away");
        // To round the number down to 2 decimal places try looking up the native function ".toFixed()"
    } else {
        // 1. If tracking the user has not yet been completed, this code creates a loop which runs the function "calculateDistance" after a wait of 3 seconds (3000 miliseconds)
        setTimeout(function(){calculateDistance(lat,lon)},3000);
        // 2. onfirm function was not successful by sending "Calculation Not Possible Yet" text to the browser console
        console.log("Calculation Not Possible Yet");
    }
}

// CAN USER CHECK IN ?
// This function requires a distance and a radius to run
function canUserCheckin(distance,radius){
    if(typeof userPosition != "undefined") {
        // Logic for location
        if(distance < radius){
            // allowCheckin();
            // changeMessage("Congrats!");
        } else {
            // denyCheckin();
            // changeMessage("Come closer!");
        }
    } else {
        console.log("No distance yet");
        setTimeout(function(){
            canUserCheckin(distance,radius)},3000);
    }
}

// CUSTOMISE MESSAGE DISPLAYED IN PARAGRAPH WITH AN ID OF "MESSAGE"
function changeMessage(newContent) {
    // 1. Use the jQuery library function .html to change the content of the paragraph element with an id of "message"
    $("p#message").html(newContent);
    // 2. Confirm function has worked by sending "Message Changed" text to the browser console
    console.log("Message Changed");
}

// REMOVE FORM TO DENY CHECKIN
function denyCheckin() {
    // 1. Use the jQuery library function ".hide" to remove the form and deny check in
    $("form").hide();
    // 2. Confirm function has worked by sending "Deny Check In" text to the browser console
    console.log("Deny Check In");
}

// CALCULATE DISTANCE
// This function requires a target latitude (lat1), a target longitude (lon2), a user latitude (lat2), and a user longitude (lat2)
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    // The following code was found online
    // SOURCE: http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    distance = R * c; // Distance in km
    return distance;
}
function deg2rad(deg) {
  return deg * (Math.PI/180)
}

// TRACKING WAS UNSUCCESSFUL
function trackError(){
    // 1. Change message in app to explain that tracking unsuccessful
    changeMessage("Tracking your location was unsuccesful. Please ensure your browser has permission to find your location.")
    // 2. Confirm function has worked by sending "Message Changed" text to the browser console
    console.log("Tracking Failed");
}

// TRACKING WAS SUCCESSFUL
// The users location data produced by the "trackUserLocation" function is stored in "userPosition"
function trackSuccess(position) {
    // 1. Store position data in a variable called "userPosition"
    userPosition = position;
    // 2. Send "userPosition" data to browser console
    console.log(userPosition);
    // 3. Store user's latitude in a variable called "userLat"
    userLat = userPosition.coords.latitude;
    // 4. Store user's longitude in a variable called "userLon"
    userLon = userPosition.coords.longitude;
    // 5. Confirm function was successful by sending "User Location Data Stored" text to the browser console
    console.log("User Location Data Stored");
}

// TRACK A USERS LOCATION
function trackUserLocation(){
    // 1. Run native browser function "watchPosition" to track user location. If tracking is succesful run "trackSuccess" function. If tracking is unsuccessful, run "trackError" function
    navigator.geolocation.watchPosition(trackSuccess,trackError);
    // 2. Confirm function has worked by sending "Initiating Tracking" text to the browser console
    console.log("Initiating Tracking");
}

// DISPLAY WEATHER OF TARGET LOCATION
function weatherDisplay(lat,lon) {
    findWeather(lat,lon,storeWeatherData);
}

function findweather(lat,lon,callback) {
    var weather = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon;
    $.ajax({
      dataType: "jsonp",
      url: weather,
      success: callback
    });
}

function storeWeatherData(data){
    console.log(data);
    console.log('weather data received');
    var currentWeather = data.weather[0].description;
    console.log(currentWeather);
    changeWeatherMessage("The current weather is " + currentWeather);
}

// CUSTOMISE MESSAGE DISPLAYED IN PARAGRAPH WITH AN ID OF "WEATHER"
function changeWeatherMessage(newContent) {
    // 1. Use the jQuery library function .html to change the content of the paragraph element with an id of "weather"
    $('p#weather').html(newContent);
    // 2. Confirm function has worked by sending "Weather Message Changed" text to the browser console
    console.log("Weather Message Changed");
}
