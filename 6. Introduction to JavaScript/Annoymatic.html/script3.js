// script3
// <li>Ask the user "Are we there yet?"</li>
// <li>Keep asking again again until they enter "Yes" OR "Yeah"</li>
// <li>The, Alert "Yay, we finally made it!"</li>



// while (answer !== "yes" && answer !== "yeah") {
//   var answer = prompt("Are we there yet?");
// }
//
// alert("Yay, we made it!!");

// if (answer === "yes"){
//   alert("Yay, we made it!")
// }

//VERSION 2

var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet?");
}

alert("Yay, we made it!!");
