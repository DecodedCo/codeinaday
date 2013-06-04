Code in a Day Boilerplate
=========================

This boilerplate helps attendees get started with their Code in a Day app. It includes

## HTML 

#### head-helper.html

Some simple code snippets to help mobile optimise a web app. Place within your HTML &lt;head&gt;

## CSS

#### normalize.css

Reset our CSS to the same defaults cross-browser. See <http://necolas.github.io/normalize.css/>

## JavaScript

#### form.js

JavaScript file that processes a form input, and submits the result to a database without refreshing the page (uses jQuery's AJAX helper function)

#### jquery.js

Un-minified version of jQuery: takes longer to load, but allows you to look under the hood!

#### latlon.js

Code snippet for calculating the distance between two pairs of lat/lon co-ordinates. Simply include the file, and call this function: 

	getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2);

Code originally found here: <http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points>

#### tracker.js

Starter file for writing code that tracks the user's position using the HTML5 geolocation API.