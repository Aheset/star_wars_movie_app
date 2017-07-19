
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

  var main_characters = movie.main_characters;

  //movies : movies
  //in the object litrat the value on the left(The first movies) is the variable accessable in our template file
  //and to the right, the value it represents

    res.render('movie_single', {
      movies : movies,
      title : title,
      movie : movie,
      main_characters : main_characters

  });//the name of the route doesn't have to be the same
  //movie_single
  } else {
    res.render('notFound', {
      movies : movies,
      title: "This is not the page you are looking for"
    });
  }

};

//notFound

exports.notFound = function(req, res){//exporting functionality as notFound
  var movies = moviesJSON.movies;

  res.render('notFound', {
    movies : movies,
    title: "This is not the page you are looking for"
  });
};
