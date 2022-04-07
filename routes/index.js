var express = require('express');
var router = express.Router();
const axios = require('axios')
const passport = require('passport')

const wayfairRootURL = 'https://api.wayfair.com';
const apiKey = process.env.WAYFAIR_TOKEN



// Takes client to 3rd party login -- Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));


// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));


// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout(); // <- passport method that destroys the cookie! aka we no longer know what the client is
  res.redirect('/movies');
});




/* GET home page. */
router.get('/', function (req, res, next) {

  console.log(req.query)

  // redirect if we dont get anything back....


  const options = {
    method: 'GET',
    url: 'https://api.wayfair.com/v1/3dapi/models?page=4',
    auth: {
      username: 'm.mark.frazier@gmail.com',
      password: apiKey
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  // const wayfairData = JSON.parse(response)
  // console.log(wayfairData)

  res.render('index', { title: 'Express' });
});













module.exports = router;
