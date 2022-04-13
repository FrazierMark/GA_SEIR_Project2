const express = require('express');
const router = express.Router();
const wishlistCtrl = require('../controllers/wishlist');
const isLoggedIn = require('../config/auth');

router.post('/:id', isLoggedIn, wishlistCtrl.new)

//Access to all furniture....
router.get('/', isLoggedIn, wishlistCtrl.index);

// router.get('/:id', wishlistCtrl.show);

router.get('/add_edit/:id', isLoggedIn, wishlistCtrl.)

module.exports = router;
