var button = document.querySelector("button");
var button2 = document.getElementById("bgred");


button.addEventListener("click", function(){
  document.body.classList.toggle("bgpurple");
});

button2.addEventListener("click", function(){
  document.body.classList.toggle("bgred");
})


//classList is to add a 'classes's' properties to the element in question

// var isPurple = false;
//OldSchool Way of toggling
// button.addEventListener("click", function(){
//   if(isPurple){
//     document.body.style.background = "white";
//   } else
//     document.body.style.background = "purple";
//     isPurple = !isPurple;
// });
