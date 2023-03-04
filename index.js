
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "sounds/dice" + randomNumber1 + ".png";

var image1 = document.querySelector(".img1");

image1.setAttribute("src", randomImage1);

var randomImage2 = "sounds/dice" + randomNumber2 + ".png";

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS!!";
}
else {
    document.querySelector("h1").innerHTML = "DRAW";
}