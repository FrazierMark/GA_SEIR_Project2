const express = require('express');
const User = require("../models/user")
var router = express.Router();
const passport = require('passport');




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
  res.redirect('/landingPage');
});



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('landingPage', { title: 'Home' });
});








module.exports = router;
