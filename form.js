// 1. Wait for the page to load, then run interceptSubmit
jQuery(document).ready(interceptSubmit);

// Function to intercept the submit process
function interceptSubmit() {
    // 2. When someone clicks on the button...
    $("form").submit(function() {
    // $ is a shortcut for jQuery
        // 3. Perform an AJAX request
        $.ajax({
            // 4. Use the URL from the form ...
            url: $('form').attr('action'),
            // 5. Send the username from the input
            data: { username: $('input').val() },
            // 6. If it has worked, take the result
            success: function(result){
                // 7. Change the paragraph with an id 'message'
                $('p#message').html('Hello there ' + result.username + '! Number of checkins: ' + result.checkIns);   
                // 8. Hide the form now the user has checked in
                $('form').hide();
                // 9. Once they have checked in, stop watching their position
                if (typeof watchUser != 'undefined') 
                    navigator.geolocation.clearWatch(watchUser);
            } // END success
        }); // END ajax
        
        // 10. Allow form to submit without reloading the page
        event.preventDefault();
    }) // END submit
} // END interceptSubmit
