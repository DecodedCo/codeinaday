// 1. When someone submits a form:
jQuery("form").submit(function() {
    // 2. Define the id as a random number
    id = Math.floor(Math.random()*10000);
    // 3. Perform an AJAX request ($ is a shortcut for jQuery):
    $.ajax({
        // 4. Where to send data: use the URL from the form's action attribute
        url: $("form").attr("action"),
        // 5. Send the data from the input (with out id)
        data: "id=" + id + "&" + $("form").serialize(),
        // 6. What to do if data submits successfully:
        success: function(result){
            // 7. Change the paragraph with an id 'message' to display a thank you message
            $("p#message").html("Thanks for your information");
            // 8. Hide the form now the user has given us information in
            $("form").hide();
        } // END success
    }); // END ajax

    // 9. Allow form to submit without reloading the page
    event.preventDefault();
}) // END submit
