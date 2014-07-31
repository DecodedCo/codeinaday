// Find the user's location using geolocation
navigator.geolocation.watchPosition(successFunction, errorFunction);

// successFunction is run when watchPosition method is successful 
function successFunction(position){

	// Test if successFuncton worked in console
	console.log("Tracking worked!")

	// Extract user location information from position object 
	var userLat = position.coords.latitude;
	var userLon = position.coords.longitude;

} // END successFunction
