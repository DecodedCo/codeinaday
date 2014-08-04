// Find the users location using geolocation
watchUser = navigator.geolocation.watchPosition(successFunction, errorFunction);

// successFunction is run when watchPosition is successful 
function successFunction(position){

	// Test if successFuncton worked in console
	console.log("Tracking worked!");
	
	// Look at object created by watchPosition 
	console.log(position);

	// Store user location information in position object 
	var userLat = position.coords.latitude;
	var userLon = position.coords.longitude;

} // END successFunction
