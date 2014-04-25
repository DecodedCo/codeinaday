Code in a Day Boilerplate
=========================

This boilerplate helps attendees get started with their Code in a Day app. It includes

## JavaScript

#### form.js

JavaScript file that processes a form input, and submits the result to the Decoded Checkin API without refreshing the page (uses jQuery's AJAX helper function)

## Images

#### apple-touch-icon.png

An icon for the homescreen of your users' mobile devices

# API Documentation

## What it does

The Decoded Checkin API makes it possible to store a list of usernames and the number of times each one has been checked in.

## How to use it

The API is exposed via a URL: `http://api.decoded.co/checkin/`

To create a new data store using the API, add a unique string of text to the URL:

`http://api.decoded.co/checkin/dd-mm-yy/app-name`

In the above example we are using the date and a separate app name to create a new data store.

By default, a data store consists of all the names with the number of checkins.

To create a new checkin, make an HTTP request to the same URL but append a "username" parameter:

`http://api.decoded.co/checking/dd-mm-yy/app-name?username=justinbieber`

If the "username" does not currently appear in the data store, then it is added with the number of checkins set to one (1).  Each subsequent HTTP request will increment the number of checkins for that user by one.  The URL will then return a JavaScript object of the result:

`{
  user: "justinbieber",
  checkins: 40000
}`

## How it works

The API has been implemented using JavaScript/Node.js to run a server on the Raspberry PI.  Each data store file consists of a list of usernames and corresponding number of checkins, stored in "JSON" (JavaScript Object Notation) format eg

`{
  "justinbieber": 40000,
  "jimmyfallon": 16,
  "MarthaStewart‎": 7
}`

The contents of this file are updated in response to the HTTP requests described above.
