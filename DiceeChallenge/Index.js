﻿//Dice 1:
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage = "dice" + randomNumber1 + ".png";

    var randomImageSource = "images/" + randomDiceImage;

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    //Dice 2:
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage2 = "dice" + randomNumber2 + ".png";

    var randomImageSource = "images/" + randomDiceImage2;

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImageSource);


//if (randomDiceImage === randomDiceImage2)
//{
//    alert("You Won!");
//}




