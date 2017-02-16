// set up connection to backend
var config = {
  apiKey: "AIzaSyDitJzcGdLOjK_wrkunm4kgdf1iR_JqoEg",
  authDomain: "bespoke-visa-ae.firebaseapp.com",
  databaseURL: "https://bespoke-visa-ae.firebaseio.com",
  storageBucket: "bespoke-visa-ae.appspot.com",
  messagingSenderId: "357822213544"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// make a variable to store the user's name
var username;
// set a random starting balance
var balance = 3000+Math.floor(2000*Math.random());

// function to register a new user
$("#nameform").submit(function(){
  username = $("#username").val();
  $("#nameform").hide();
  $("#sendform").show();

  // save username to database
  database.ref('users/'+username.toLowerCase()).set({
    username: username,
    account: balance
  });

  // change the message in the app
  $("p").html(username+", send and receive money from friends!");
  $("p").after("<h2>$"+balance+"</h2>");

  // don't open a new window
  event.preventDefault();

  // update my UI when my someone else sends me money changes
  database.ref('users/' + username).on('value', function(snapshot){
    //console.log(snapshot.val());
    var newBalance = snapshot.val().account;
    if(newBalance > balance){
      $("h2").html("$"+newBalance);
      var change = newBalance - balance;
      $("h2").after("<p id='alert' style='display: none;'>You received $"+change+"! :)</p>");
      $("#alert").fadeIn().delay(1000).fadeOut();
      balance = newBalance;
    }
  });
});

// update the list of users when a new user is added
database.ref('users/').on('child_added', function(snapshot) {
  $('#users').append($("<option></option>").attr("value",snapshot.val().username.capitalize())                     .text(snapshot.val().username.capitalize()));
});

// to capitalize
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

// function to send money
$("#sendform").submit(function(){
  var user = $("#users").val();
  var amount = parseInt($("#amount").val());
  if(amount > 0 && balance >= amount){

    // subtract money from my account
    var myBalance = balance - amount;
    database.ref('users/'+username.toLowerCase()).update({
      account: myBalance
    });
    $("h2").html("$"+myBalance);

    // add money to their account
    var theirBalance;
    database.ref('users/'+user.toLowerCase()).once('value').then(function(snapshot) {
      theirBalance = snapshot.val().account;
      theirBalance = theirBalance + amount;
      database.ref('users/'+user.toLowerCase()).update({
        account: theirBalance
      });
    });
    $("h2").after("<p id='alert' style='display: none;'>$"+amount+" sent to "+user.capitalize()+" :)</p>");
    $("#amount").val('');
    $("#alert").fadeIn().delay(1000).fadeOut();
    balance = myBalance;
  } else if(amount <= 0){
    $("h2").after("<p id='alert' style='display: none;'>Can't transfer negative values!</p>");
    $("#amount").val('');
    $("#alert").fadeIn().delay(1000).fadeOut();
  } else if(amount > balance){
    $("h2").after("<p id='alert' style='display: none;'>You don't have enough money!</p>");
    $("#amount").val('');
    $("#alert").fadeIn().delay(1000).fadeOut();
  }
  event.preventDefault();
});
