// Stop AJAX caching 
jQuery.ajaxSetup({ cache:false });

// Wait for the page to load - $ is a shortcut for jQuery
$(document).ready(interceptSubmit);

// Main function: process form input via AJAX
function interceptSubmit() {
    // 1 When someone clicks on the button...
    $("form").submit(function() {

        var username = $('input:first').val();
           $.ajax({
                url: 'http://api.decoded.co/checkin',
                data: {username: username},
                method: 'POST',
                dataType: 'jsonp',
                jsonp: 'callback',
                jsonpCallback: 'jsonpCallback',
                success: function(data){
                    console.log(data);
                    // Display messages
                    $('p#message').html('Hello there @' + data.username + '! Number of checkins: ' + data.checkIns);   
                    $('form').hide();
                    if (typeof watchUser != 'undefined') navigator.geolocation.clearWatch(watchUser);
                }
            });
        return false;
    })
    // Allow form to submit without reloading the page 
}
  
