var topic = [];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=sWsnA7UXhW7EQhC9uPHFvYAxl9Jo6GMF"

//ajax request
$.ajax({
    url: queryURL,
    method: "GET"
  })