$(document).ready(getStarted);

function getStarted(){	
	// watch the user's location
	watchUser = navigator.geolocation.watchPosition(calculateDistance);



} // END getStarted

// Our function to pass to watchPosition when it finds user
function calculateDistance(position){



} // END calculateDistance
