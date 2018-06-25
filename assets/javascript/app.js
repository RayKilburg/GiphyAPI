var topic = [];
//var queryURL = "https://api.giphy.com/v1/gifs/search?q=sWsnA7UXhW7EQhC9uPHFvYAxl9Jo6GMF";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=sWsnA7UXhW7EQhC9uPHFvYAxl9Jo6GMF&limit=5";
console.log("app.js")
// var klsk = $$(this).attr(data type);
//ajax request
$.ajax({
    url: queryURL,
    method: "GET"
  })

  //.then function
  .then(function(response){
    var topic = response.data; 
    console.log(response)
  });

  //for loop to run through data

  //if else statments to run and puase gif