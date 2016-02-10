// Hide the form using jQuery ($)
$('form').hide();


// Watch the user's location
watchUser = navigator.geolocation.watchPosition(foundYou);

// Our function to pass to watchPosition when it finds user
function foundYou(yourPosition){

  // What is "yourPosition"? *hint* press CMD+Alt+J to look in the console...
  console.log(yourPosition);

  // Store target location
  var targetLat = 51.430602;
  var targetLon = -0.566526;

  // Store user's location
  var userLat = yourPosition.coords.latitude;
  var userLon = yourPosition.coords.longitude;

  var distance = getDistanceFromLatLonInKm(userLat,userLon,targetLat,targetLon);

  // Test distance
  console.log(distance);

  // Create threashold for checkin
  var geofence = 5;

  // LOGIC!
  if (distance < geofence){
    $('form').show();
  } else {
    $('form').hide();
  }

} // END foundYou

// Code snippet found here: http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

// 1. When someone submits the form:
jQuery("form").submit(function() {
  // 2. Perform an AJAX request ($ is a shortcut for jQuery):
  $.ajax({
    // 3. Where to send data: use the URL from the form's action attribute
    url: $('form').attr('action'),
    // 4. What data to send: send the username specified in form input
    data: { username: $('input').val() },
    // 5. What to do if data submits successfully:
    success: function(result){
      // 6. Change the paragraph with an id 'message' to display a welcome message
      $('form').html('Thank you for your information');
      // 7. Once they have checked in, stop watching their position
      if (typeof watchUser != 'undefined')
        navigator.geolocation.clearWatch(watchUser);
    } // END success
  }); // END ajax
  // 9. Allow form to submit without reloading the page
  event.preventDefault();
}) // END submit


// Our function to pass to watchPosition when it finds user
function foundYou(yourPosition){

  // What is "yourPosition"? *hint* press CMD+Alt+J to look in the console...
  console.log(yourPosition);

  // Store user's location
  var userLat = yourPosition.coords.latitude;
  var userLon = yourPosition.coords.longitude;

  // Uber API URL
  var apiUrl = "https://api.uber.com/v1/estimates/time?start_latitude="+userLat+"&start_longitude="+userLon;

  // Make an ajax request to the uber api
  $.ajax({
    url: apiUrl,
    // Authorization Token is required for requests to uber api
    // This token comes from https://developers.uber.com
    headers: {"Authorization": "Token VYkyBdIrlfBxksBZm22XtMWhhbZLTFxqbX1WiDNY"},
    success: printUberTime
  });

} // END foundYou

// Takes the response from the uber api and updates the paragraph with id="uber"
function printUberTime(response) {
  // log the api response to the console
  console.log(response);

  // Store the seconds till an uber arrives in a variable.
  // Value in [] is the type of uber: 0 = uberX, 1 = 
  var timeInSeconds = response.times[0].estimate
  
  // Update the paragraph with an id of "uber" to show the time estimate
  $('p#uber').html("An uber will take " + timeInSeconds + " seconds to arrive");
}

// To use the button triggers:
// Create a button element with a trigger attribute set to the trigger url
// e.g. <button trigger="MY.URL.COM">Click Me</button>
// When a button is clicked
$('button').click(function() {
  // Get the url from the trigger attribute
  var triggerUrl = $(this).attr('trigger')
  // Make an ajax request to the trigger url
  $.ajax({
    url: triggerUrl
  });
});
