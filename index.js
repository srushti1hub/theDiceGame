alert('Welcome to Dice Challenge !');

//Player 1
var randomnum1 = Math.floor(Math.random()*6) + 1;
var randomdiceimg1 = "images/dice" + randomnum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdiceimg1);

//Player 2
var randomnum2 = Math.floor(Math.random()*6) + 1;
var randomdiceimg2 = "images/dice" + randomnum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimg2);

//Result
if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins !"
}
else if(randomnum2>randomnum1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins !"
}
else{
    document.querySelector("h1").innerHTML = "Draw !"
}