var topic = [];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=sWsnA7UXhW7EQhC9uPHFvYAxl9Jo6GMF";
// var klsk = $$(this).attr(data type);
//ajax request
$.ajax({
    url: queryURL,
    method: "GET"
  })

  //.then function
  .then(function(response){
    var topic = response.data;
  });

  //for loop to run through data

  //if else statments to run and puase gif