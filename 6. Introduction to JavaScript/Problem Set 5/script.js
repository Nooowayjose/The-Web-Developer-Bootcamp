//For Loop Input
// var input;
// var summation = 0;
// var array3 = [];
var array = [];
var input;

/***MAIN***/
//Reverse Array
// loopInput();
// printArray(array3);
// reverseFunction(array3);
//isUniform
// console.log("___________Uniform String___________");
// isUniform(array3);
loopInput(input);
sumArray(array);
//sumArray
//maxArray
/***END OF MAIN***/

// Print Array
// function printArray(array3){
//   for (var i = 0; i < array3.length; i++){
//     console.log(array3[i]);
//   }
//   console.log("___________Reserved String___________");
// }
// // Reverse Array
// function reverseFunction(array3){
//   for (var i = array3.length - 1; i > -1; i--) {
//     console.log(array3[i]);
//   }
// }
//
// //Loop Input
function loopInput(){
input = prompt("Enter a number/string below to push to array. Enter 'exit' to quit app.");
  while (input != "exit"){
    array.push(input);
    input = prompt("Enter a number/string to store to the array. Enter 'exit' to quit app.");
  }
  console.log("Initial Input");
  console.log(array);
}
//
// // //Uniform function
// function isUniform(j){
//   for (var i = 0; i < j.length; i++) {
//     var k = j[0];
//     if (k !== j[i]) {
//       console.log("False");
//       return false;
//     }
//   }
//   console.log("True");
//   return true;
// }

//sumArray
function sumArray(a, b) {
  for (var i = 0; i < j.length; i++) {
    j[i]
  }
}


//max
//Accepts an array of numbers and returns the maximum ("greatest") number
