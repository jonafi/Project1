
function getRandomRecipe() {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var mealName = response.meals[0].strMeal;  //name of meal
        var mealImage = response.meals[0].strMealThumb; //URL of meal image
        var mealRecipe =response.meals[0].strSource;  //URL of full recipe details "open in new window?"
        var mealVideo = response.meals[0].strYoutube; //video of recipe 

        console.log(mealName);
        console.log(mealImage);
        console.log(mealRecipe);
        console.log(mealVideo);

    })
        

}


function getSearchRecipe() {
    var userInput = prompt("replace this with a search box.  What recipe search term?")
    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="+userInput;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
        var mealName = response.meals[0].strMeal;  //name of meal
        var mealImage = response.meals[0].strMealThumb; //URL of meal image
        var mealRecipe =response.meals[0].strSource;  //URL of full recipe details "open in new window?"
        var mealVideo = response.meals[0].strYoutube; //video of recipe 

        console.log(mealName);
        console.log(mealImage);
        console.log(mealRecipe);
        console.log(mealVideo);

    })
       

}

function getDessert() {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
    $.ajax({

        url: queryURL,
        method: "GET"
    }).then(function (response) {
        i=0;
        console.log(response);
        while(response.meals[i] !== undefined){

         console.log(response.meals[i].idMeal);
         console.log(response.meals[i].strDrinkThumb);
         console.log(response.meals[i].strMeal);
         i++;
     }
 });
        

}



