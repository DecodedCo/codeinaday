Code in a Day Boilerplate
=========================

This boilerplate helps attendees get started with their Code in a Day app. It includes the following files.

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



**CREATE A NEW DATA STORE**

  1. The API is exposed via a URL: `http://api.decoded.co/checkin/`

  2. To create a new data store, add a unique string of text to the URL: 

  `http://api.decoded.co/checkin/new-store/`

**STORING A CHECKIN**

  1. To create a new checkin, make an HTTP request to the same URL, but append a **"username"** parameter: `http://api.decoded.co/checkin/dd-mm-yy/?username=stephenfry` 

  2. If the "username" does not currently exist in the "new-store", then it is added with the number of checkins set to one (1).  

  3. Each subsequent HTTP request will increment the number of checkins for that user by one.  

  4. The URL will then return a JavaScript object of the result: 
  `{
  user: "stephenfry",
  checkins: 1
}`


**CREATING A CHECKIN INPUT**

  1. Create an **HTML form** and define the **form action** as the **new-store** API URL.

  2. Create a **text input** inside the form and give it the name **"username"**.


## How it works

The API has been implemented using JavaScript/Node.js to run a server on the Raspberry PI.  Each data store file consists of a list of usernames and corresponding number of checkins, stored in "JSON" (JavaScript Object Notation) format eg

`{
  "stephenfry": 10,
  "jimmyfallon": 16,
  "MarthaStewart‎": 7
}`

The contents of this file are updated in response to the HTTP requests described above.
