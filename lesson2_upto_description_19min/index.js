
var moviesJSON = require('../movies.json');



exports.home = function(req, res){//exporting the functionalilty as home

  var movies = moviesJSON.movies;//getting the movies array and storing it in the var movies.
  res.render('home', {
    title: "Starwars Movies", //passing information, key value pairs
    movies : movies //movies gets movies(the array of movies)
  });
};

exports.movie_single = function(req, res){//exporting functionality as movie_single
  var episode_number = req.params.episode_number;//this corsponds to
  //app.js file app.get('/star_wars_episode/:episode_number?', routes.movie_single);

  var movies = moviesJSON.movies;

  if (episode_number >= 1 && episode_number <= 6) {
    var movie = movies[episode_number - 1];

    var title = movie.title;

    res.render('movie_single', {
      movies : movies,
      title : title,
      movie : movie

  });//the name of the route doesn't have to be the same
  //movie_single
  } else {
    res.send("This is not the page you are looking for.")
  }

};

//notFound

exports.notFound = function(req, res){//exporting functionality as notFound
  res.send("This is not the page you are looking for!");
};
