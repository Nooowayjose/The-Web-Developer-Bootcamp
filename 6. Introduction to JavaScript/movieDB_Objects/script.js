// Movie DB script


var movies = [
  {
    title: "Wall-e",
    hasWatched: true,
    rating: 5
  },
  {
    title: "Pulp-Fiction",
    hasWatched: true,
    rating: 5
  },
  {
    title: "Les Miserable",
    hasWatched: false,
    rating: 3.5
  }
]


for (var i = 0; i < movies.length; i++) {
  var result = "You have ";
  if (movies[i].hasWatched) {
    result += "watched ";
  }else {
    result += "not seen ";
  }
  result += "\"" + movies[i].title + "\" - ";
  result += movies[i].rating + " stars";
  console.log(result);
}
