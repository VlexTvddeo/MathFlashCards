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

//disapear text
function hideIntro() {
  document.getElementById("intro").style.cssText = 'opacity: 0';
}

//hide numbers
function hidenum() {
  document.getElementById("numOne").style.cssText = 'opacity: 1';
}

function hidenum2() {
  document.getElementById("numTwo").style.cssText = 'opacity: 1';
}
function hidenum3() {
  document.getElementById("ad").style.cssText = 'opacity: 1';
}
function hidenum4() {
  document.getElementById("box").style.cssText = 'opacity: 1';
}
//run timer down to 0 and hide/ show stuff
function start(){
var timeleft = 19;
butDis ();
seeCard ();
hideIntro ();
hidenum ();
hidenum2 ();
hidenum3 ();
randoNum();
hidenum4();
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
  document.getElementById("numOne").innerHTML = Math.floor(Math.random(0-9));
}

//adding numbers
function adding(){
  var answer= numOne+numTwo;
}

//check answer--from excercise files
function ansCheck() {
    let textEntered = textarea.value;
    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText) {


    } else {
        if (textEntered == originTextMatch) {

        } else {

        }
    }

}
