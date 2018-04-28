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

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

// ----------------------------------------------//
// ----------------------------------------------//

var input = process.argv;
var a = input[2];

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

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

else if (a === "spotify-this-song") {
    //console.log('spotify-this-song');
    spotify.search({ type: 'track', query: 'All the Small Things' })
        .then(function (response) {
            //console.log(response);
            console.log(JSON.stringify(response, null, 2));
        })
        .catch(function (err) {
            console.log(err);
        });
}

// else if (a === "movie-this") {
//     console.log('movie-this');
// }

// else if (a === "do-what-it-says") {
//     console.log('do-what-it-says');
// }

