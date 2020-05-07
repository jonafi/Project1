$( document ).ready(function() {


function getCocktail(userInput){
    if(userInput==="rando"){
    var APIcall = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    }
   else{
    var APIcall = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput;
    }    
    $.ajax({url: APIcall, method: "GET",
            
    }).then(function(cocktailDB) {
        console.log("------------------------------------");
        console.log(cocktailDB.drinks[0].strDrink);
        console.log(cocktailDB.drinks[0].strDrinkThumb);
        console.log(cocktailDB.drinks[0].strIngredient1);
        console.log(cocktailDB.drinks[0].strIngredient2);
        console.log(cocktailDB.drinks[0].strIngredient3); 
        console.log(cocktailDB.drinks[0].strIngredient4); 
        console.log(cocktailDB.drinks[0].strIngredient5); 
        console.log(cocktailDB.drinks[0].strIngredient6); 
        console.log(cocktailDB.drinks[0].strIngredient7); 
        console.log(cocktailDB.drinks[0].strIngredient8); 
        console.log(cocktailDB.drinks[0].strIngredient9); 
        console.log(cocktailDB.drinks[0].strIngredient10);
        console.log(cocktailDB.drinks[0].strInstructions);
        console.log("------------------------------------");
        
    });
};

var userInput = "rando";
getCocktail(userInput);

var userInput = "piña colada";
getCocktail(userInput);

$("#breakfast-btn").on("click,", function(){
    
});


});

