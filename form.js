// 1. When someone submits the form ($ is a shortcut for jQuery):
$("form").submit(function() {
    // 2. Perform an AJAX request:
    $.ajax({
        // 3. Where to send data: use the URL from the form's action attribute
        url: $('form').attr('action'),
        // 4. What data to send: send the username specified in form input 
        data: { username: $('input').val() },
        // 5. What to do if data submits successfully:
        success: function(result){
            // 6. Change the paragraph with an id 'message' to display a welcome message
            $('p#message').html('Hello there ' + result.username + '! Number of checkins: ' + result.checkIns);   
            // 7. Hide the form now the user has checked in
            $('form').hide();
            // 8. Once they have checked in, stop watching their position
            if (typeof watchUser != 'undefined') 
                navigator.geolocation.clearWatch(watchUser);
        } // END success
    }); // END ajax
    
    // 9. Allow form to submit without reloading the page
    event.preventDefault();
}) // END submit

