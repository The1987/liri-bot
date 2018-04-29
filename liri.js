// Screen shot the app working and add into repo

// Install npm Twitter
// Done

// Install npm Spotify API
// Done

// Install request (to make any REST call)
// This will be used for OMDB
// Done

// Install npm dotenv (for key encryption)
// Done
// ----------------------------------------------//
// ----------------------------------------------//

require("dotenv").config();
var keys = require("./key.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

// ----------------------------------------------//
// ----------------------------------------------//

var input = process.argv;
var a = input[2];
var b = input[3];

// This will show your last 20 tweets and when they were created at in your terminal/bash window.
if (a === "my-tweets") {
    var params = { screen_name: 'ChrisHantis' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            //console.log(tweets);
            //console.log(JSON.stringify(response, null, 2));
            console.log(JSON.stringify(tweets, null, 2));
        }
    });

}

else if (a === "spotify-this-song") {
    spotify.search({ type: "track", query: b, limit: 5 })
        .then(function (response) {
            //console.log(JSON.stringify(response, null, 2));

            //Artist(s)
            console.log(JSON.stringify(response.tracks.items[0].artists[0].name, null, 2));

            // //Song Name
            console.log(JSON.stringify(response.tracks.items[0].name, null, 2));

            // //Song Preview Link
            console.log(JSON.stringify(response.tracks.items[0].external_urls.spotify, null, 2));

            // //Album, Song Is From
            console.log(JSON.stringify(response.tracks.items[0].album.name, null, 2));

        })

        .catch(function (err) {
            spotify.search({ type: "track", query: "The Sign" })
            console.log(JSON.stringify(err, null, 2));
            console.log(err);
        })

        .catch(function (fail) {
            spotify.search({ type: "track", query: "The Sign" })
            console.log(JSON.stringify(fail, null, 2));
        });
}

else if (a === "movie-this") {
    console.log(b);
    request("https://www.omdbapi.com/?t=" + b + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        // If the request was successful...
        if (!error && response.statusCode === 200) {

            // Title of the movie.
            console.log(JSON.parse(body).Title);

            // Year the movie came out.
            console.log(JSON.parse(body).Title);

            // IMDB Rating of the movie.
            console.log(JSON.parse(body).Title);

            // Rotten Tomatoes Rating of the movie.
            console.log(JSON.parse(body).Title);

            // Country where the movie was produced.
            console.log(JSON.parse(body).Title);

            // Language of the movie.
            console.log(JSON.parse(body).Title);

            // Plot of the movie.
            console.log(JSON.parse(body).Title);

            // Actors in the movie.
            console.log(JSON.parse(body).Title);

        }
        else {
            console.log("If you haven't watch Mr. Nobody then you should watch it on Netflix <a href='http://www.imdb.com/title/tt0485947/' target='_blank'");
        }
        // node liri movie-this babe
    });


// else if (a === "do-what-it-says") {
//     console.log('do-what-it-says');
// }