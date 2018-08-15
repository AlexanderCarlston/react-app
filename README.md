# React guest map app
* React app that lets user make a comment, and pins that comment with their message

## TODO

* [X] create-react-app
* [X] Install react-leaflet: https://github.com/PaulLeCam/react-leaflet
* [X] Get a map on the page!
* [] Get the users location
  * [] with the browser
  * [] with their IP using an API
* [] Show a pin at the users location
* [] Show a form to submit a message
  * when form is submitted - POST /message
* [] Setup server with create-epress-api: https://www.npmjs.com/package/create-epress-api
* [] POST /messages
  * latitude
  * longitude
  * name
  * message
  * datetime
* [] When the page loads get all messages
  * [] GET /messages
* [] Add pins to the map
* [] Click a pin to see the message
* [] DEPLOY!
* Refactor React app
  * seperate components
  * seperate file for API requests
  * seperate file for Location requests

## Stretch
* [ ] Allow user to drag pin
* [ ] Login
* [ ] Users have their own guest map with their own markers and unique URL