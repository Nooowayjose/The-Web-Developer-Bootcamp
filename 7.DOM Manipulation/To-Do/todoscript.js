var allLI  = document.querySelectorAll("li");

for (var i = 0; i < allLI.length; i++) {
  //turn to green
  allLI[i].addEventListener("mouseover", function(){
    this.classList.add("selected");
  });
  //turn list to black
  allLI[i].addEventListener("mouseout", function(){
    this.classList.remove("selected");
  });
  //click complete
  allLI[i].addEventListener("click", function(){
    this.classList.toggle("done");
  });

}
