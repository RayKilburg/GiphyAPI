

$("button").on("click", function() {
//var queryURL = "https://api.giphy.com/v1/gifs/search?q=sWsnA7UXhW7EQhC9uPHFvYAxl9Jo6GMF";
var person = $(this).attr("data-person");
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + 
person + "&api_key=sWsnA7UXhW7EQhC9uPHFvYAxl9Jo6GMF&limit=10";
console.log("app.js")
  // var person = $(this).attr("data-person");
//ajax request
$.ajax({
    url: queryURL,
    method: "GET"
  })

  //.then function
  .then(function(response){
    var results = response.data; 
    console.log(response)

    for (var i = 0; i < results.length; i++){
      var gifDiv = $("<div class='item'>");

      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var personImage = $("<img>");
      personImage.attr("src", results[i].images.fixed_height.url);

      gifDiv.prepend(p);
      gifDiv.prepend(personImage);

      $("#gifs-appear-here").prepend(gifDiv);


    }
  });


});

  //for loop to run through data

  //if else statments to run and puase
  //pause and stop gifs

  //get user text to = result
  
  //user make new button