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
        console.log(foodName);
        console.log(meal);
        console.log(ingredients);
        console.log(foodTime);

        for (i = 1; i < 20; i++) {
            if (response.meals[0]["strIngredient" + i] !== null) {
                foodIngredients.push(response.meals[0]["strIngredient" + i]);
            }
        }


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
            foodIngredients.append(recipeIngredientsItem);
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