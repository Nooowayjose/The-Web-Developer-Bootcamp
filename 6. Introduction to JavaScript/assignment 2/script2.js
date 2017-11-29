// assignment 2
//Uses chrome console.
//Link to any html file by using the script tag 

// Prob 1
var num1 = -10;
while(num1 < 20){
  console.log(num1);
  num1++;
}

//Print all even numbers
var num2 = 10;
while (num2 < 41) {
  if(num2 % 2 == 0){
    console.log("Here's an even number: " + num2);
  }
  num2++;
}

// Print all odd numbers
var num3 = 300;
while (num3 <= 333) {
  if(num3 % 2 == 1){
    console.log("Here's an odd number: " + num3);
  }
  num3++;
}

//Print all numbers divisible by 5 AND 3 between 5 and 50
var num4 = 5;
while (num4 < 50){
  if((num4 % 3 == 0) && (num4 % 5 == 0)){
    console.log("This number is divisible by 3 and 5 " + num4);
  }
  num4++;
}
