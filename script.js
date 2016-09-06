// When the page is loaded
$(document).ready(function() {
  
  // Hide form to disallow checkin
  $("form").hide();

  // Change message to show we're tracking their location
  $("p#message").html("Please enable location services");

  // Find the users location using geolocation
  watchUser = navigator.geolocation.watchPosition(success);

  // 1. When someone submits a form:
  $("form").submit(function() {
      // 2. Perform an AJAX request ($ is a shortcut for jQuery):
      $.ajax({
          // 3. Where to send data: use the URL from the form's action attribute
          url: $("form").attr("action"),
          // 4. Send the username from the input
          data: { username: $("input[name=username]").val() },
          // 5. What to do if data submits successfully:
          success: function(result){
              // 6. Change the paragraph with an id 'message' to display a welcome message
              $("p#message").html("Hello there " + result.username + "! Number of checkins: " + result.checkIns);   
              // 7. Hide the form now the user has checked in
              $("form").hide();
              // 8. Once they have checked in, stop watching their position
              if (typeof watchUser != "undefined") 
                  navigator.geolocation.clearWatch(watchUser);
          } // END success
      }); // END ajax
      
      // 9. Allow form to submit without reloading the page
      event.preventDefault();
  }) // END submit

}); // End page is loaded

// success is run when watchPosition is successful
function success(position){

  // Test if tracking worked in browser console
  console.log("Tracking was successful!");

  // Capture user location coordinates in variables
  var userLat = position.coords.latitude;
  var userLon = position.coords.longitude;

  // Where is the target location?
  var targetLat = 0;
  var targetLon = 0;

  // Calculate the distance

  var distance = calculateDistance(userLat, userLon, targetLat, targetLon);

  // Define the radius for checkin

  var radius = 0;

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
