var myButtons = ["dogs", "cats"];

//adding buttons to array myButtons
function renderButtons() {
  //stops dogs and cat buttons from repeating
  $("#myTarget").empty();
  for (var i = 0; i < myButtons.length; i++) {
    $("#myTarget").append(
      "<button class='user-button'>" + myButtons[i] + "</button>"
    );
    console.log(myButtons);
  }
}

$("form").on("submit", function(event) {
  event.preventDefault();
  console.log($("#user-input").val());
  myButtons.push($("#user-input").val());
  renderButtons();
});
 var animal;
$(document).on("click", ".user-button", function() {
  console.log($(this).text());
 animal = $(this).text()

 //url variable
  var queryURL =
    "http://api.giphy.com/v1/gifs/search?q=" +
    animal +
    "&api_key=sWsnA7UXhW7EQhC9uPHFvYAxl9Jo6GMF&limit=10";
  console.log("app.js");
  // var person = $(this).attr("data-person");
  //ajax request
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    //.then function
    .then(function(response) {
      var results = response.data;
      console.log(response);

      for (var i = 0; i < results.length; i++) {
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

renderButtons();

//onclick function to pause gifs
//how to call still gif from object or api
