function getRecipe() {


    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
      $.ajax({
    
          url: queryURL,
          method: "GET"
      }).then(function (response) {
          console.log("it works");
          console.log(response);
          console.log(response.meals[0].strMeal);
    
      })
    
    }
    
    getRecipe();