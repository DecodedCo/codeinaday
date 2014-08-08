// Find the users location using geolocation
watchUser = navigator.geolocation.watchPosition(success, error);

// success is run when watchPosition is successful 
function success(position){

	// Test if tracking worked in console
	console.log("Tracking worked!");

	// Look at position object created by watchPosition 
	console.log(position);

} // END success
