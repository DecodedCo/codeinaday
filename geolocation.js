// Hide form to disallow checkin
$("form").hide();

// Change message
$("p#message").html("Please allow tracking...");

// Find the users location using geolocation
watchUser = navigator.geolocation.watchPosition(success);

// success is run when watchPosition is successful
function success(position){

	// Test if tracking worked in browser console
	console.log("Tracking was successful!");

	// View position object in browser console
	console.log(position);

	// Capture user location coordinates in variables
	var userLat = position.coords.latitude;
	var userLon = position.coords.longitude;

  	// Capture target location coordinate in variables
  	var targetLat = -36.8394755;
  	var targetLon = 174.7656892;

} // END success



// Calculate Distance Function




