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
var fs = require("fs");

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

// ----------------------------------------------//
// ----------------------------------------------//

var input = process.argv;
var a = input[2];
var b = input[3];

// This will show your last 20 tweets and when they were created at in your terminal/bash window.
if (a === "my-tweets") {
    var params = { screen_name: 'ChrisHantis', limit: 20 };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {

        // Test Input: node liri my-tweets

        //console.log(tweets);
        console.log(JSON.stringify(tweets, null, 2));
    });

}

else if (a === "spotify-this-song") {
    spotify.search({ type: "track", query: b, limit: 5 })
        .then(function (response) {
            //console.log(JSON.stringify(response, null, 2));

            //Artist(s)
            console.log('Artist Name: ', JSON.stringify(response.tracks.items[0].artists[0].name, null, 2));

            // //Song Name
            console.log('Song Name: ', JSON.stringify(response.tracks.items[0].name, null, 2));

            // //Song Preview Link
            console.log('Preview Song Link: ', JSON.stringify(response.tracks.items[0].external_urls.spotify, null, 2));

            // //Album, Song Is From
            console.log('Album: ', JSON.stringify(response.tracks.items[0].album.name, null, 2));

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
    if (b) {
        request("https://www.omdbapi.com/?t=" + b + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

            // Test Input: node liri movie-this babe

            // If the request was successful...
            // if (!error && response.statusCode === 200) {

            // Title of the movie.
            console.log('Movie Title: ', JSON.parse(body).Title);

            // Year the movie came out.
            console.log('Year: ', JSON.parse(body).Year);

            // IMDB Rating of the movie.
            console.log('IMDB Rating: ', JSON.parse(body).Ratings[0]);

            // Rotten Tomatoes Rating of the movie.
            console.log('Rotten Tomatoes: ', JSON.parse(body).Ratings[1]);

            // Country where the movie was produced.
            console.log('Country of Origin: ', JSON.parse(body).Country);

            // Language of the movie.
            console.log('Language: ', JSON.parse(body).Language);

            // Plot of the movie.
            console.log('Plot: ', JSON.parse(body).Plot);

            // Actors in the movie.
            console.log('Actors: ', JSON.parse(body).Actors);
        })
    }

        // Test Input: node liri movie-this

    else {
        console.log("If you haven't watched Mr. Nobody... then you should watch it on Netflix");
    }
}

// Test Input: node liri do-what-it-says

else if (a === "do-what-it-says") {
    // fs.readFile('random.txt', 'utf-8', function (err, data) {
    //     if (err) throw err;
    //     console.log('This is the data in the .txt file: ', data);

        spotify.search({ type: "track", query: "I Want it That Way", limit: 5 })
            .then(function (response) {

                //Artist(s)
                console.log('Artist Name: ', JSON.stringify(response.tracks.items[0].artists[0].name, null, 2));

                // //Song Name
                console.log('Song Name: ', JSON.stringify(response.tracks.items[0].name, null, 2));

                // //Song Preview Link
                console.log('Preview Song Link: ', JSON.stringify(response.tracks.items[0].external_urls.spotify, null, 2));

                // //Album, Song Is From
                console.log('Album: ', JSON.stringify(response.tracks.items[0].album.name, null, 2));

            });
        //})
    }
