const express = require('express');
const router = express.Router();
const wishlistCtrl = require('../controllers/wishlist');
const isLoggedIn = require('../config/auth');

router.post('/', isLoggedIn, wishlistCtrl.new)

//Access to all furniture....
router.get('/', isLoggedIn, wishlistCtrl.index);





module.exports = router;
