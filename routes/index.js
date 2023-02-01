var express = require('express');
var router = express.Router();
const fetch = require("node-fetch")

const api_key = process.env.api_key


router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    .then(response => response.json())
      .then(data => {
         res.json({movies: data.results})


      })
})

module.exports = router;
