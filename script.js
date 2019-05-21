//JavaScript here
var score;
var time;
var numOne;
var numTwo;
var addSub;
var answer;
var ansGiven;
//setting start time
var time = 20;

//button disapear on start
function butDis() {
    document.getElementById("starter").style.cssText = 'opacity: 0';
}

//flash card visible
function seeCard() {
  document.getElementById("ele").style.cssText = 'width: 400';
}

//run timer down to 0
function start(){
var timeleft = 19;
butDis ();
seeCard ();
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "0";
  }
}, 1000);
}

//random number generator
function randoNum() {
  return Math.floor(Math.random(0-9));
  var numOne = randoNum
}

//adding numbers
function adding(){
  var answer= numOne+numTwo;
}
