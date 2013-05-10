// Stop AJAX caching 
$.ajaxSetup({ cache:false });

$(document).ready(interceptSubmit);

function interceptSubmit() {
    // 1 When someone clicks on the button...
    $("form").submit(function() {

        var username = $('input:first').val();
           $.ajax({
                url: 'http://form.decoded.co:3000/',
                data: {username: username},
                method: 'POST',
                dataType: 'jsonp',
                jsonp: 'callback',
                jsonpCallback: 'jsonpCallback',
                success: function(data){
                    console.log(data);
                    // Display messages
                    $('.message').html('Hello there @' + data.username + '! Number of checkins: ' + data.checkIns);   
                    $('form').hide();
                    if (watchUser) {
                        navigator.geolocation.clearWatch(watchUser);
                    }
                }
            });
        return false;
    })
    // Allow form to submit without reloading the page 
}
  
