const express = require('express');
var router = express.Router();
const passport = require('passport');

router.get(
	'/auth/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth callback route
router.get(
	'/oauth2callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/',
	})
);

// OAuth logout route
router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('../views/landingPage', { title: 'Home' });
});

module.exports = router;
