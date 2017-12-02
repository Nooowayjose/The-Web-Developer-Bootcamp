// script for loop assignment
//translating while to for loops

//Print all numbers from -10 to 19
for (var i = -10; i < 20; i++){
  console.log(i);
}

//Print all even numbers from 10 to 40
for (var j = 10; j < 41; j++){
  if(j % 2 == 0){
    console.log("Here's an even number: " + j);
  }
}

//Same as above but for odd numbers from 300 to 333
for (var k = 300; k <= 333; k++){
  if(k % 2 == 1){
    console.log("Here's an odd number: " + k);
  }
}

//Print all numbers divisible by 5 and 3 between 5 and 50

for (var l = 5; l < 50; l++){
  if((l % 3 == 0) && (l % 5 == 0)){
    console.log("This number is divisible by 3 and 5: " + l);
  }
}
