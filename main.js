// // ========== MM TIMER CODE ===========

var displayTime = document.getElementById('display_time');
var startButton = document.getElementById('start_timer');

var minutes = 0;
var seconds = 0;
var milliseconds = 0;

var add = function() {
milliseconds += 100;
if(milliseconds >= 1000) {
milliseconds = 0;
seconds++;
if(seconds >= 60) {
seconds = 0;
minutes++;
}
}

displayTime.innerHTML = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") 
+ ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" 
+ (milliseconds > 90 ? milliseconds : "0" + milliseconds);

timer();
}

var timer = function() {
t = setTimeout(add,100);

}

var stopTimer = function() {
clearTimeout(t);
}

// ========== ASTEROID RANDOMIZER ===========

var asteroid1 = document.getElementById("asteroid1");
var asteroid2 = document.getElementById("asteroid2");
var asteroid3 = document.getElementById("asteroid3");
var asteroid4 = document.getElementById("asteroid4");

  asteroid1.style.opacity = 0;
  asteroid2.style.opacity = 0;
  asteroid3.style.opacity = 0;
  asteroid4.style.opacity = 0;
    
var showAsteroid = function(){

asteroid1.style.opacity = 1;
asteroid1.style.top = (Math.random() * 500) + "px";
asteroid1.style.left = (Math.random() * 700) + "px";

asteroid2.style.opacity = 1;
asteroid2.style.top = (Math.random() * 500) + "px";
asteroid2.style.left = (Math.random() * 700) + "px";

asteroid3.style.opacity = 1;
asteroid3.style.top = (Math.random() * 500) + "px";
asteroid3.style.left = (Math.random() * 700) + "px";

asteroid4.style.opacity = 1;
asteroid4.style.top = (Math.random() * 500) + "px";
asteroid4.style.left = (Math.random() * 700) + "px";

  }
// // ========== MM MOVEMENT CODE ===========

startButton.addEventListener('click', function() {
timer();
showAsteroid(); 
});

var megaMan = document.getElementById("mm");

  megaMan.style.left = megaMan.offsetLeft + "px";
  megaMan.style.top = megaMan.offsetTop + "px";

  window.onkeydown = function(event) {  

  var move = event.keyCode;

  switch(move) {
    case 39:
        megaMan.style.left =  (parseInt(megaMan.style.left, 10) + 10) + "px";
      break;
    case 37:
        megaMan.style.left =  (parseInt(megaMan.style.left, 10) - 10) + "px";
        break;
    case 40:
        megaMan.style.top =  (parseInt(megaMan.style.top, 10) + 10) + "px";
        break;
    case 38:
        megaMan.style.top =  (parseInt(megaMan.style.top, 10) - 10) + "px";
        break;
    default:
        break;

    }
}