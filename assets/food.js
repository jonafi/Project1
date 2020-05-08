

function getRecipe(userInput) {
    
    var apiKey = "";
    var queryURL = "" + apiKey + x  + y;
      $.ajax({
  
          url: queryURL,
          method: "GET"
      }).then(function (response) {
          var uvStuff = response.value;
          console.log("it works");
          console.log(response);
          
         
  
      })
    
}