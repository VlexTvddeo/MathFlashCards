//JavaScript here 
var score;
var time;
var numOne;
var numTwo;
var addSub;
var answer;
var ansGiven;

var time = 20;

function start(){
var timeleft = 19;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "0";
  }
  function startv2(){
    
  }
}, 1000);
}

function adding(){
  var answer= numOne+numTwo;
}
