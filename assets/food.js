

function getRecipe(userInput) {

    var apiKey = "a7069c43e13c417486872a222fdec9b1";
    var queryURL = "https://api.spoonacular.com/recipes/search?query=cheese&number=5&apiKey=" + apiKey;
      $.ajax({
  
          url: queryURL,
          method: "GET"
      }).then(function (response) {
          console.log("it works");
          console.log(response);
  
      })
    
}