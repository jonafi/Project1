$(document).ready(function () {
    function getCocktail(userInput) {
        $("#cocktail").empty();
        if(typeof userInput === "number"){
            var APIcall = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12560"
        }
        else if(userInput === "rando") {
            var APIcall = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        }
        else {
            var APIcall = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput;
        }
        $.ajax({
            url: APIcall, method: "GET",

        }).then(function (cocktailDB) {
            console.log(cocktailDB)
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
            cocktailImage.attr("style", "height:250px;")

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

    function noAlcohol(){
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic", method: "GET",

        }).then(function (boozeFree) {
               i=0;
               while(boozeFree.drinks[i] !== undefined){
                // console.log(boozeFree.drinks[i].idDrink);
                var naResult = $("<div>");
                naResult.attr("id", boozeFree.drinks[i].idDrink);
                naResult.addClass("nonAlcoholicResult");

                var naThumb = $("<img>");
                naThumb.attr("src", boozeFree.drinks[i].strDrinkThumb);
                naThumb.attr("height", "70px;");

                var naName = $("<span>");
                naName.text(boozeFree.drinks[i].strDrink);

                naResult.append(naThumb);
                naResult.append(naName);                

                $("#cocktail").append(naResult);
                i++;
            }
        });
    }

    $(document).on("click", ".nonAlcoholicResult", function(){
        getCocktail(parseInt(this.id));
      });


    //  var userInput = "rando";
    //  getCocktail(userInput);

    // var userInput = "piña colada";
    // getCocktail(userInput);


    noAlcohol();
 });