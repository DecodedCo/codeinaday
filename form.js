// Main function: process form input via AJAX
// When someone clicks on the button...
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
             $('#message').html('Hello there @' + data.username + '! Number of checkins: ' + data.checkIns);
             $('form').hide();
             if (typeof watchUser != 'undefined') navigator.geolocation.clearWatch(watchUser);
        }
    });
    // Allow form to submit without reloading the page
    return false;
});

