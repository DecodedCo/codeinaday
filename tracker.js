// Wait for the HTML to load
$(document).ready(getStarted);

// Do this when it's loaded
function getStarted() {	




  // track the user's location
  watchUser = navigator.geolocation.watchPosition(calculateDistance);

} // END getStarted

// Function to run when the user's position is found
function calculateDistance(position) {
  
  
  
  
} // END calculateDistance
