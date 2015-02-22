// DECODED LOCATION LIBRARY

/* INDEX
1. allowCheckin
2. calculateDistance
3. changeMessage
4. denyCheckin
5. getDistanceFromLatLonInKm
6. trackSuccess
7. trackUserLocation
8. userCheckinChecker
*/



// 1. allowCheckin [SHOW FORM TO ALLOW CHECKIN]
function allowCheckin() {
  // a. Use the jQuery library function ".show" to display the form and allow check in
  $("form").show();
  // b. Confirm function has worked by sending "Allow Check In" text to the browser console
  console.log("Allow Check In");
}



// 2. calculateDistance [CALCULATE THE DISTANCE BETWEEN USER & TARGET]
function calculateDistance(lat,lon) {
  // This code checks that user tracking was succesful
  if(typeof userPosition != "undefined") {
    // a. The function "getDistanceFromLatLonInKm" is now run
    getDistanceFromLatLonInKm(lat,lon,userLat,userLon);
  } else {
    // a. This code creates a loop which runs the function "calculateDistance" again after a short wait
    setTimeout(function(){calculateDistance(lat,lon)},3000); 
    // b. Confirm function is being run again by sending "Run calculateDistance again" text to the browser console
    console.log("Run calculateDistance again");
  }
}



// 3. changeMessage [CUSTOMISE MESSAGE]
function changeMessage(newContent) {
  // a. Use the jQuery library function ".html" to change the content of the paragraph element with an id of "message"
  $("p#message").html(newContent);
  // b. Confirm function has worked by sending "Message Changed" text to the browser console
  console.log("Message Changed");
}



// 4. denyCheckin [REMOVE FORM TO DENY CHECKIN]
function denyCheckin() {
  // a. Use the jQuery library function ".hide" to remove the form and deny check in
  $("form").hide();
  // b. Confirm function has worked by sending "Deny Check In" text to the browser console
  console.log("Deny Check In");
}



// 5. getDistanceFromLatLonInKm [CALCULATE DISTANCE]
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  // http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  distance = R * c; // Distance in km
  return distance;
  // Confirm function has worked by sending the distance value stored in "distance" to the browser console
  console.log("The user is " +distance+ "km away");
}
function deg2rad(deg) {
  return deg * (Math.PI/180)
}



// 6. trackSuccess [TRACKING WAS SUCCESSFUL]
function trackSuccess(position) {
  // 1. Store position data in a variable called "userPosition"
  userPosition = position;
  // 2. Send "userPosition" data to browser console
  console.log(userPosition);
  // 3. Store user's latitude in a global variable called "userLat"
  userLat = userPosition.coords.latitude;
  // 4. Store user's longitude in a global variable called "userLon"
  userLon = userPosition.coords.longitude;
  // 5. Confirm function was successful by sending "User Location Data Stored" text to the browser console
  console.log("User Location Data Stored");
}



// 7. trackUserLocation [TRACK A USERS LOCATION]
function trackUserLocation(){
  // 1. Run native browser function "watchPosition" to track user location. 
  navigator.geolocation.watchPosition(trackSuccess);
  // 2. Confirm function has worked by sending "Initiating Tracking" text to the browser console
  console.log("Initiating Tracking");
}


// 8. userCheckinChecker [CAN USER CHECK IN?]
function userCheckinChecker(distance,radius){
  // This code checks that user tracking was succesful
  if(typeof userPosition != "undefined") {

    // LOGIC
    if(distance < radius){ // User is at Location...

      // Allow Check In

      // Change Message To Congratulate User

    } else { // User is not at Location...

      // Deny Check In

      // Change Message To Encourage User Closer

    }
  } else {
    // a. This code creates a loop which runs the function "calculateDistance" again after a short wait
    setTimeout(function(){userCheckinChecker(distance,radius)},3000); 
    // b. Confirm function is being run again by sending "Run userCheckinChecker again" text to the browser console
    console.log("Run userCheckinChecker again");
  }
}

