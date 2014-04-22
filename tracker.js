// hide the form using jQuery ($)
$('form').hide();

// update the paragraph with an id of message
$('p#message').html("Please enable geolocation");

// watch the user's location
watchUser = navigator.geolocation.watchPosition(foundYou);

// Our function to pass to watchPosition when it finds user
function foundYou(yourPosition){

  // What is "yourPosition"?
  console.log(yourPosition);




} // END foundYou


// Code snippet found here: http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
