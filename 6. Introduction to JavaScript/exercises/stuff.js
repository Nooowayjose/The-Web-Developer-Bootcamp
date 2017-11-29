// fidsj

var age = prompt("What is your age?");

if (age < 0 ){
  alert("Error");
}
else if(age < 18){
  alert("Sorry bud, you're too young to enter and can't drink");
  if(age % 2 !== 0){
    alert("Your age is odd btw");
  }
  if (age % age == 0){
    alert("Your age is a perfect square btw");
  }
}
else if(age < 21){
  alert("You can enter, but cannot drink");
  if(age % 2 !== 0){
    alert("Your age is odd btw");
  }
  if (age % age == 0){
    alert("Your age is a perfect square btw");
  }
}
else if(age == 21){
  alert("Happy Birthday!!");
  if(age % 2 !== 0){
    alert("Your age is odd btw");
  }
  if (age % age == 0){
    alert("Your age is a perfect square btw");
  }
}
else{
  alert("Come on in. Drinks on me.");
  if(age % 2 !== 0){
    alert("Your age is odd btw");
  }
  if (age % age == 0){
    alert("Your age is a perfect square btw");
  }
}


// if (age % age == 0){
//   alert("Your age is a perfect square btw");
// }
