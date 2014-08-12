// Find the users location using geolocation
watchUser = navigator.geolocation.watchPosition(success, error);

// success is run when watchPosition is successful 
function success(position){

	// Test if tracking worked in console
	console.log("Tracking worked!");

	// Capture user location coordinates in variables
	var userLat = position.coords.latitude;
	var userLon = position.coords.longitude;

} // END success
