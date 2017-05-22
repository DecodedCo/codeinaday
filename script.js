// Use HTML5 geolocation to track the user
watchUser = navigator.geolocation.watchPosition(success, error);

// Locate the message paragraph
message = document.getElementById("message");

// If they are found, run application logic
function success(position){

  // Capture user location coordinates in variables
  var userLat = position.coords.latitude;
  var userLon = position.coords.longitude;

  // Where is the target location?
  var targetLat = 0;
  var targetLon = 0;

  // Calculate the distance away from the target

  var distance = calculateDistance(userLat, userLon, targetLat, targetLon, "M");

  // Define the radius for application action

  var radius = 0; // in miles

  // Logic

  if (distance < radius) {

    // change message to a welcome message
    message.innerHTML = "You made it! Check in now for your reward!";

  } else {

    // change message to an encouraging message
    message.innerHTML = "You need to get closer. You are still " + distance.toFixed(2) + " miles away.";

  }

} // END success

// When geolocation fails
function error(e) {

  message.innerHTML = "Geolocation failed. Please refresh (" + e.message + ")";

} // END error

// From http://www.geodatasource.com/developers/javascript

function calculateDistance(lat1, lon1, lat2, lon2, unit) {

  var radlat1 = Math.PI * lat1/180;
  var radlat2 = Math.PI * lat2/180;
  var radlon1 = Math.PI * lon1/180;
  var radlon2 = Math.PI * lon2/180;
  var theta = lon1-lon2;
  var radtheta = Math.PI * theta/180;
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = dist * 180/Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit=="K") { dist = dist * 1.609344; }
  if (unit=="N") { dist = dist * 0.8684; }
  return dist;

} // END calculateDistance
