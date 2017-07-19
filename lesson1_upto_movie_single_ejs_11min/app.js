var express = require('express');
var app = express(); //app has all the methods of express

app.set('view engine', 'ejs');

//Routes
var routes = require('./routes'); //tell our app js file how to access the file

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));//the app will automatically
//look in the public directory for any static items
//home

app.get('/', routes.home);

app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//notFound

app.get('*', routes.notFound);


app.listen(3000, function() {
  console.log("The application is running on localhost 3000");
});
