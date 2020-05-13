function getRecipe() {


    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
    $.ajax({

        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("it works");
        console.log(response);
        var foodIngredients = [];
        var foodMeasures = [];
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

        for (i = 1; i < 15; i++) {
            if (response.meals[0]["strMeasure" + i] !==null) {
                foodMeasures.push(response.meals[0]["strMeasure" + i]);
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

        var recipeMeasures = $("<ul>");
        for (i = 0; i < foodMeasures.length; i++) {
            recipeMeasuresItem = $("<li>")
            recipeMeasuresItem.text(foodMeasures[i]);
            recipeMeasures.append(recipeMeasuresItem);
        }

        console.log("here are the recipe measures: " + response.meals.length);
        
        var recipeGuide = $("<div>");
        recipeGuide.text(foodInstructions);

        mealDisplay.append(foodName);
        mealDisplay.append(foodImg);
        mealDisplay.append(recipeIngredients);
        mealDisplay.append(recipeGuide);

        
        $("#breakfast-btn").on('click', function(){
            console.log("breakfast btn works!");
            console.log(response.meals[0].strCategory);
        });


        $("#lunch-btn").on('click', function(){
            console.log("lunch btn works!");
        });

        $("#dinner-btn").on('click', function(){
            console.log("dinner btn works!");
        });
    })

}

getRecipe();


