$(document).ready(function () {

    function getCocktail(userInput) {
        if (userInput === "rando") {
            var APIcall = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        }
        else {
            var APIcall = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput;
        }
        $.ajax({
            url: APIcall, method: "GET",

        }).then(function (cocktailDB) {
            //Set all the variables, drink ingredients as an array
            var drinkIngredients = [];
            var drinkName = cocktailDB.drinks[0].strDrink;
            var drinkImageURL = cocktailDB.drinks[0].strDrinkThumb;
            var drinkInstrructions = cocktailDB.drinks[0].strInstructions;

            for (i = 1; i < 15; i++) {
                if (cocktailDB.drinks[0]["strIngredient" + i] !== null) {
                    drinkIngredients.push(cocktailDB.drinks[0]["strIngredient" + i]);
                }
            }

            //Basic display shows name of drink, picture, and instructions
            //ingredients are displayed as list items
            //div has a starter class of "Cocktail"
            var cocktailDisplay = $("<div>");
            cocktailDisplay.addClass("Cocktail");

            var cocktailName = $("<div>");
            cocktailName.text(drinkName);

            var cocktailImage = $("<img>");
            cocktailImage.attr("src", drinkImageURL);
            //cocktailImage.attr("style", "height:250px;")

            var cocktailIngredients = $("<ul>");
            for (i = 0; i < drinkIngredients.length; i++) {
                cocktailIngredientsItem = $("<li>");
                cocktailIngredientsItem.text(drinkIngredients[i]);
                cocktailIngredients.append(cocktailIngredientsItem);
            }

            var cocktailDirections = $("<div>");
            cocktailDirections.text(drinkInstrructions);

            cocktailDisplay.append(cocktailName);
            cocktailDisplay.append(cocktailImage);
            cocktailDisplay.append(cocktailIngredients);
            cocktailDisplay.append(cocktailDirections);
            $("#cocktail").append(cocktailDisplay);





        });
    };

    var userInput = "rando";
    getCocktail(userInput);

    //var userInput = "piña colada";
    //getCocktail(userInput);


});

