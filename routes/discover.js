const express = require('express');
const router = express.Router();
const discoverCtrl = require('../controllers/discover');
const isLoggedIn = require('../config/auth');


// all of these start with /movies, because of this code in our server
// app.use('/movies', moviesRouter);

// THis matches the URL
//movies
router.get('/', moviesCtrl.index);

// GET /movies/new
router.get('/new', isLoggedIn, moviesCtrl.new);
//movies/1303727424
router.get('/:id', moviesCtrl.show);
// POST /movies
router.post('/', isLoggedIn, moviesCtrl.create);



module.exports = router;
