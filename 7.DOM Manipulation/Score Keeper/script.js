// script
//*****FOLLOW ALONG FIRST, PROCESS, MAKE STUFF, FIX IF BROKEN, REPEAT

var p1Button = document.querySelector("#p1"); //Using an hash symbol for ID because we're using a query Selector on an ID
var p2Button = document.getElementById("p2"); //Since were getting the element by an ID, we do not need the hash symbol
var resetButton = document.getElementById("reset");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input[type='number']");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

//P1 Button
p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }

});

//P2 Button
p2Button.addEventListener("click", function(){

  if(!gameOver){
    p2Score++;
    if (p2Score === winningScore) {     //You can use greater than here to make sure the code continues to run, but we will reset it instead
      p2Display.classList.add("winner");
      gameOver = true;
    }
  }
  p2Display.textContent = p2Score;
});

//Reset Button
resetButton.addEventListener("click", function(){
  reset();
});

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

//Number input
numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = this.value; //numInput.value //Using this to reference the event the input was listening on
  winningScore = Number(this.value);
  reset();
});
