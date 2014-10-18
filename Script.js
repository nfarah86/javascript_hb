var getText = document.getElementById("get-text");
getText.addEventListener("click", function(e){
    e.preventDefault();
    // console.log();
    //function that gets called when we click on get-text!

    var replaceText = document.getElementById("text-box-replace");
    replaceText.innerHTML = "World";

});

var colorChange =document.getElementById("get-color");
colorChange.addEventListener("click", function(e){
    e.preventDefault();

    var colorChangeRed = document.getElementById("text-box-color");
    colorChangeRed.innerHTML = "I am the color red!";
    colorChangeRed.style.backgroundColor="red";

});


var pictureMelon = document.getElementById("get-melon");
pictureMelon.addEventListener("click", function(e){
    e.preventDefault();
    alert("it works");

    var melonChange = document.getElementsByTagName("img");
    console.log(melonChange)
    melonChange[0].src = "http://upload.wikimedia.org/wikipedia/commons/e/e7/Cantaloupe_and_canary_melon.jpg";

});

// classList; toggle; toggle = method on classList