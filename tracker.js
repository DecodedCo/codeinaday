function success(position){
  // Hide form to disallow checkin
  $("form").hide();
  
  // Change message to show we're tracking their location
  $( "form" ).before( "<p id=\"message\">Tracking your location</p>" );
  //$("p#message").html("Please enable location services");

  // Find the users location using geolocation
  watchUser = navigator.geolocation.watchPosition(success);
  
  // Test if tracking worked in browser console
  console.log("Tracking was successful!");

  // Capture user location coordinates in variables
  var userLat = position.coords.latitude;
  var userLon = position.coords.longitude;

  // Where is the target location?
  var targetLat = 40.7479095;
  var targetLon = -73.9841027;

  // Calculate the distance

  var distance = calculateDistance(userLat, userLon, targetLat, targetLon);

  // Define the radius for checkin

  var radius = 0.2; // in miles

  // Logic

  if (distance < radius) {
    // allow checkin
    $("form").show();
    $("p#message").html("Congratulations you made it! Enter your details below:");
  } else {
    // prevent checkin
    $("form").hide();
    $("p#message").html("You are currently " + distance.toFixed(1) + " miles away. Keep moving!");
  }

} // END success


// From http://www.geodatasource.com/developers/javascript

function calculateDistance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = Math.PI * lat1/180
  var radlat2 = Math.PI * lat2/180
  var radlon1 = Math.PI * lon1/180
  var radlon2 = Math.PI * lon2/180
  var theta = lon1-lon2
  var radtheta = Math.PI * theta/180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist)
  dist = dist * 180/Math.PI
  dist = dist * 60 * 1.1515
  if (unit=="K") { dist = dist * 1.609344 }
  if (unit=="N") { dist = dist * 0.8684 }
  return dist
}
