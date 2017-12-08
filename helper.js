// Find the users location using geolocation
navigator.geolocation.watchPosition(success);

// Success is run when watchPosition is successful 
function success(position){

	// Test if tracking worked in browser console
	console.log("Tracking was successful!");
	
	// View position object in browser console
	console.log(position);

} // END success


