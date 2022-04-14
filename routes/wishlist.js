const express = require('express');
const router = express.Router();
const wishlistCtrl = require('../controllers/wishlist');
const isLoggedIn = require('../config/auth');


router.post('/:id', isLoggedIn, wishlistCtrl.new)
router.get('/', isLoggedIn, wishlistCtrl.index);
router.delete('/:id', isLoggedIn, wishlistCtrl.delete);

module.exports = router;
