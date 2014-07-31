// Watch the user's location using geolocation
watchUser = navigator.geolocation.watchPosition(successFunction, errorFunction);

// successFunction is run when watchPosition method is successful 
function successFunction(position){

	// Test if successFuncton worked in console
	console.log("Tracking worked!")

	// Extracting user locaiton information from position object 
	var userLat = position.coords.latitude;
	var userLon = position.coords.longitude;

} // END successFunction