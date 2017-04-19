B2B Email Code in a Day Afternoon
=========================

This is a description of how to integrate backend support to collect metrics on user interactions.

## Pixel

#### Getting Started

Open the following image in a new tab:

`https://track.decoded.com/track.png?`

#### Add a Campaign Name

The backend needs a `campaign` name to return data, so add:

`campaign=[name of your campaign]`

The data is now recorded in a Firebase database each time the `track.png` image is opened!

#### Collect More Data

You can also add any additional data you'd like to collect, e.g.

`&author=[your name]`

`&version=a`

`&date=YYYYMMDD`

## Button

#### Getting Started

To track clicks of a button, open the following URL in a new tab:

`https://track.decoded.com/link?`

#### Add a URL destination

Clicking on the link should direct the user to a new webpage. Once you have a URL destination in mind, URL encode that website at https://www.urlencoder.org/ - this will convert the `:`, `/`, `?`, `&` and other special characters into URL-friendly codes like `%20` (that's a space).

Now add the encoded URL to the end of the [https://track.decoded.com/link?](https://track.decoded.com/link?) URL:

`url=[encoded URL]`

#### Add a Campaign Name

The backend needs a `campaign` name to return data, so add:

`&campaign=[name of your campaign]`

#### Collect More Data

You can also add any additional data you'd like to collect, e.g.

`&author=[your name]`

`&version=a`

`&date=YYYYMMDD`
