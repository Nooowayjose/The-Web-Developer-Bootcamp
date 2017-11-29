// script for guess.html

var number = 7;
var guess = prompt("Guess a number!");

if (guess < number){
  alert("Too Low. Try again");
}

else if (guess > number){
  alert("Too high! Try again.");
}

else if (number == 7){
  alert("Wooh! Congrats you got it!");
}
