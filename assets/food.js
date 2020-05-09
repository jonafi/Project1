function getRecipe() {


    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
    $.ajax({

        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("it works");
        console.log(response);
        var foodIngredients = [];
        var mealName = response.meals[0].strMeal;
        var foodPicURL = response.meals[0].strMealThumb;
        var foodInstructions = response.meals[0].strInstructions;
        var foodTime = response.meals[0].strCategory;




//ingredients range from 1-20
        for (i = 1; i < 20; i++) {
            if (response.meals[0]["strIngredient" + i] !== null) {
                foodIngredients.push(response.meals[0]["strIngredient" + i]);
            }
        }

// creating the div to display the meal
        var mealDisplay = $("<div>");
        mealDisplay.addClass("Meal");

        var foodName = $("<div>");
        foodName.text(mealName);     
        
        var foodImg = $("<img>");
        foodImg.attr("src", foodPicURL);

        var recipeIngredients = $("<ul>");
        for(i = 0; i < foodIngredients.length; i++) {
            recipeIngredientsItem = $("<li>");
            recipeIngredientsItem.text(foodIngredients[i]);
            recipeIngredients.append(recipeIngredientsItem);
        }
        
        var recipeGuide = $("<div>");
        recipeGuide.text(foodInstructions);

        mealDisplay.append(foodName);
        mealDisplay.append(foodImg);
        mealDisplay.append(recipeIngredients);
        mealDisplay.append(recipeGuide);

        

    })

}

getRecipe();