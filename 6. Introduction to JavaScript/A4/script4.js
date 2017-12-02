// script4.js

// Is Even/Odd Function
console.log("Enter a number and I will determine if the number is even or odd. Use the isEven() function.");

function isEven(input){
  if(input % 2 == 0){
    console.log("Number is even");
    return true;
  }
  else{
    console.log("Number is odd");
    return false;
  }
}

//Factorial
console.log("Enter a number to output its Factorial value. Use the factorial() function.");
function factorial(n){
  if(n === 0 ){
    return 1;
  }
  return n*factorial(n - 1);
}

//Kebab to snake function using regular expressions
function kebabToSnake(str){
  //replaces all '-' with '_'
  var myString = str.replace(/-/g,"_");
  return myString;
}
