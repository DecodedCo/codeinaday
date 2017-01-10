$(document).ready(function() {  

  // Hide form to disallow checkin
  $("form").hide();
  
  // Change message to show we're tracking their location
  $("p#message").html("Tracking your location... please enable location services.");

  // Find the users location using geolocation
  watchUser = navigator.geolocation.watchPosition(success);
  
  // Test if tracking worked in browser console
  console.log("Tracking was successful!");

  function success(position){

    // Capture user location coordinates in variables
    var userLat = position.coords.latitude;
    var userLon = position.coords.longitude;

    // Where is the target location?
    var targetLat = 0;
    var targetLon = 0;

    // Calculate the distance

    var distance = calculateDistance(userLat, userLon, targetLat, targetLon, "K");

    // Define the radius for checkin

    var radius = 0; // in km

    // Logic

    if (distance < radius) {
      // allow checkin - show the form
      
      // change message to a welcome message

    } else {
      // prevent checkin - hide the form

      // change message to an encouraging message
      
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
    return dist;
  } // END calculateDistance
  
})// END Document Ready
