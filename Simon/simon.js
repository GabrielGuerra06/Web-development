var colors=["red", "blue", "green", "yellow"];

var pattern=[]
var userPattern=[]

var level = 0
var start = false

// Función que inicia el juego y cambia el título
$(document).keypress(function(){
    if(!start){
        $("#level-title").text("Level " + level);
    nextSequence();
    start = true;
    }
});

$(".btn").click(function(){
    var userSelection = $(this).attr("id");
    userPattern.push(userSelection) //append a la secuencia del usuario
    playSound(userSelection)
    animatePress(userSelection);
    checkAnswer(userPattern.length-1);
    console.log(userPattern)
});

// Función que genera una secuencia aleatoria
function nextSequence(){
    userPattern=[]
    level ++;
    $("#level-title").text("Level " + level);
    var newRandom = Math.floor(Math.random() * 4); //genera numero random
    var randomColour = colors[newRandom]; //color-random
    pattern.push(randomColour) //añade ese color a la secuencia
    $("#" + randomColour).fadeIn(250).fadeOut(250).fadeIn(250); //efecto de boton
    playSound(randomColour);
    console.log(pattern)
}

// Generar sonidos al hacer click en los botones
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

//Verificar la secuencia generada con la selección del ususario
function checkAnswer(verify){
  if(pattern[verify] === userPattern[verify]){
    if(userPattern.length === pattern.length){
        setTimeout(function () {
        nextSequence()
    },1000);

    }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("You Lost, Press Any Key to Restart");

        setTimeout(function (){
            $("body").removeClass("game-over");
        },200);
        Restart();
    }  
}

  // Identificar botón seleccionado
function animatePress(colorPick) {
    $("#" + colorPick).addClass("pressed");
    setTimeout(function () {
      $("#" + colorPick).removeClass("pressed");
    }, 100);
  }

  function Restart() {
    level = 0;
    pattern = [];
    start = false;
  }