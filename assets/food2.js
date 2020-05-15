
function getRandomRecipe() {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var mealName = response.meals[0].strMeal;  //name of meal
       
        var mealImage = response.meals[0].strMealThumb; //URL of meal image
        
        var mealRecipe = response.meals[0].strSource;  //URL of full recipe details "open in new window?"
        var mealVideo = response.meals[0].strYoutube; //video of recipe 

        console.log(mealName);
        console.log(mealImage);
        console.log(mealRecipe);
        console.log(mealVideo);

        // $("#randomRecipe").append(mealName);
        var atag = $("<a>").attr('href', mealRecipe);
        var mealN = $("<div>").append(atag.text(mealName));
        $("#randomRecipe").append(mealN);
        var imgtag = $("<a>").attr('href', mealVideo);
        var mealImg = $("<img>").attr('src', mealImage);
        mealImg.attr("style", "height:250px;")
        imgtag.append(mealImg);
        $("#randomRecipe").append(imgtag);
        // $("#randomRecipe").append(mealRecipe);
        // $("#randomRecipe").append(mealVideo);

        

        var repeatBtn = $("<button>");
        repeatBtn.text("I Would Like Something Different!");
        repeatBtn.addClass("btn-large waves-effect waves-light");
        repeatBtn.on('click', function () {
            $("#randomRecipe").empty();
            $("#randomRecipe").empty();
            getRandomRecipe();
        })
        $(mealN).append(repeatBtn);
    })


}


function getSearchRecipe(e) {

    // var userInput = prompt("replace this with a search box.  What recipe search term?")
    // //var userInput = jquery and christian make input box and form
    var userInput = $("#search").val();
    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var mealName = response.meals[0].strMeal;  //name of meal
        var mealImage = response.meals[0].strMealThumb; //URL of meal image
        var mealRecipe = response.meals[0].strSource;  //URL of full recipe details "open in new window?"
        var mealVideo = response.meals[0].strYoutube; //video of recipe 
        // var inputField = $("")

        console.log(mealName);
        console.log(mealImage);
        console.log(mealRecipe);
        console.log(mealVideo);
        $("#display-item").empty();
        // $("#randomRecipe").append(mealName);
        var atag = $("<a>").attr('href', mealRecipe);
        var mealN = $("<div>").append(atag.text(mealName));
        $("#display-item").append(mealN);
        var imgtag = $("<a>").attr('href', mealVideo);
        var mealImg = $("<img>").attr('src', mealImage);
        imgtag.append(mealImg);
        $("#display-item").append(imgtag);

        $("#submit").on('click', getSearchRecipe);
        // $("#randomRecipe").append(mealRecipe);
        // $("#randomRecipe").append(mealVideo);

        //      var repeatBtn = $("<button>").text("I Would Like Something Different!")
        //      repeatBtn.on('click', function(){
        //          $("#randomRecipe").empty();
        //          $("#randomRecipe").empty();
        //          getRandomRecipe();
        //      })
        //      $(mealN).append(repeatBtn);
        //  })

    })


}

function getDessert() {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
    $.ajax({

        url: queryURL,
        method: "GET"
    }).then(function (response) {

        i = 0;
        console.log(response);
        while (response.meals[i] !== undefined) {

            var mealName = response.meals[i].strMeal;  //name of meal
            var myQueryUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealName;
            $.ajax({

                url: myQueryUrl,
                method: "GET"
            }).then(function (response) {
                var mealName = response.meals[0].strMeal;
                var mealImage = response.meals[0].strMealThumb; //URL of meal image
                var mealRecipe = response.meals[0].strSource;  //URL of full recipe details "open in new window?"
                var mealVideo = response.meals[0].strYoutube; //video of recipe


                console.log(response.meals[0].idMeal);
                console.log(response.meals[0].strDrinkThumb);
                console.log(response.meals[0].strMeal);

                              
                // $("#randomRecipe").append(mealName);

                // column div for everything about the dessert
                var mealN = $("<div class='col m4'>");
                //$("#desserts").append(mealN);

                // div for the whole card 
                var cardDiv = $("<div class='card hoverable transparent'>");

                // div for the card image
                var cardImg = $("<div class='card-image'>");
                var imgtag = $("<a>").attr('href', mealVideo);
<<<<<<< HEAD
                var mealImg = $("<img class='cardImg z-depth-5'>").attr('src', mealImage);
=======
                var mealImg = $("<img>").attr('src', mealImage);
                mealImg.attr("style", "height:350px;")
>>>>>>> 77a79a238281763f2100634f90e73b7c377d21a2
                imgtag.append(mealImg);

                // card-action (for the recipe links), will simply be called "Recipe"
                var cardAct = $("<div class='card-action'>");
                var atag = $("<a class='black-text accent-3-text'>").attr('href', mealRecipe);
                var iconRes = $("<i class='material-icons'>").text("restaurant");
                
                atag.append(iconRes);
                atag.append("Recipe");
                

                // card title
                var nameDes = $("<span class='card-title' width= '100%'>");
                nameDes.text(mealName);
                imgtag.append(nameDes); // appending to a <a> tag
                // appending to cardImg
                cardImg.append(imgtag);
                // appending to cardAct
                cardAct.append(atag);
                // appending to card div
                cardDiv.append(cardImg);
                cardDiv.append(cardAct);
                // appending to whole column
                mealN.append(cardDiv);
                // adding to the page (DOM)
                $("#desserts").append(mealN);

            })

            i++;
        }


    });


}



