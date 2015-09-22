// Hide form to disallow checkin
$("form").hide();

// Change message to show we're tracking their location
$("p#message").html("Tracking your location now...");

// Find the users location using geolocation
watchUser = navigator.geolocation.watchPosition(success, error);

// Success is run when watchPosition is successful 
function success(position){

	// Test if tracking worked in browser console
	console.log("Tracking was successful!");
	
	// View position object in browser console
	console.log(position);

	// Capture user location coordinates in variables
	var userLat = position.coords.latitude;
	var userLon = position.coords.longitude;

} // END success


