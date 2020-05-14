$(document).ready(function () {
    function getCocktail(userInput) {
        $("#cocktail").empty();
        if(typeof userInput === "number"){
            var APIcall = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + userInput;
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
            //$("#cocktail").append(cocktailDisplay);
            if(userInput==="rando"){
            
            var reRoll = $("<button>");
            reRoll.text("I want something different");
            reRoll.addClass("btn-large waves-effect waves-light");
            reRoll.attr("id", "reRoll");
            cocktailDisplay.append(reRoll);
            $("#random").append(cocktailDisplay);
            
        }

        else if(typeof userInput===("number")){
            $("#nonAlcoholic").empty();
            $("#nonAlcoholic").append(cocktailDisplay);
        }

        else{
              $("#search").append(cocktailDisplay);
        }

        });
    };

    function noAlcohol(){
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic", method: "GET",

        }).then(function (boozeFree) {
               i=0;
               while(boozeFree.drinks[i] !== undefined){
                // colDiv <- naResult (card) <- cardImg (card-image) <- naThumb && naName

                // column div
                var colDiv = $("<div class='col m4'>");

                // console.log(boozeFree.drinks[i].idDrink);
                var naResult = $("<div>");
                naResult.attr("id", boozeFree.drinks[i].idDrink);
                // this will be a card div
                naResult.addClass("nonAlcoholicResult card hoverable");

                // cardImg div
                var cardImg = $("<div class='card-image'>")
                var naThumb = $("<img class='cardImg z-depth-5'>");
                naThumb.attr("src", boozeFree.drinks[i].strDrinkThumb);
                cardImg.append(naThumb);

                // added text to the img and append it
                var naName = $("<span class='card-title' width= '100%'>");
                naName.text(boozeFree.drinks[i].strDrink);
                cardImg.append(naName);

                naResult.append(cardImg); 
                // append everything to the column div
                colDiv.append(naResult);              

                $("#nonAlcoholic").append(colDiv);
                i++;
            }
        });
    }

  

    $(document).on("click", ".nonAlcoholicResult", function(){
        
        //need new functionality to display NA drinks other than getCocktail.

        getCocktail(parseInt(this.id));
        //
        // Trying to add button to restore list...
        // var button = $("button");
        // button.text("Get back to Non-Alcoholic drinks");
        // $("#cocktail").append(button);
    });

    $(document).on("click", "#reRoll", function(){
        $("#random").empty();
        getCocktail("rando");
    });

    $("form").submit(function( event ) {
        event.preventDefault();
        var searchTerm=$("#searchDrinks").val();
        console.log(searchTerm)
        $("#search").empty();
        getCocktail(searchTerm);

    });





//Read the appropriate page in the address bar and load up the right function
    
     if(window.location.pathname==="/quarantine-eats/results/randomcocktail.html"){
       getCocktail("rando");
    }

    else if(window.location.pathname==="/quarantine-eats/results/nonalcoholic.html"){
        noAlcohol();
    }
    else{
        getCocktail(userInput);
      }



 });


