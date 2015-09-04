var message = "Thank you for registering an interest.";

function startPage() {
// 1. When someone submits a form:
jQuery("form").submit(function() {
    // 2. Perform an AJAX request ($ is a shortcut for jQuery):
    $.ajax({
        // 3. Where to send data: use the URL from the form's action attribute
        url: $("form").attr("action"),
        // 4. Send the data from the input (with out id)
        data: $("form").serialize(),
        // 5. What to do if data submits successfully:
        success: function(result){
            // 6. Hide the form now the user has given us information in (and change the message).
            $("form").html(message);

        } // END success
    }); // END ajax
    // 7. Allow form to submit without reloading the page
    event.preventDefault();
}) // END submit
}

// Pull in jQuery
  var jq = document.createElement('script');
  jq.src = '//code.jquery.com/jquery-1.11.0.min.js';
  jq.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(jq);
  jq.onload = startPage;
