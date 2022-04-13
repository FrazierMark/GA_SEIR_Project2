const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/review');
const isLoggedIn = require('../config/auth');

router.post('/:id', isLoggedIn, reviewCtrl.new)

router.get('/:id', isLoggedIn, reviewCtrl.index);

router.delete('/:id', isLoggedIn, reviewCtrl.delete);



module.exports = router;
