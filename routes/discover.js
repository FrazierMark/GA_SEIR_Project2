const express = require('express');
const router = express.Router();
const discoverCtrl = require('../controllers/discover');
const isLoggedIn = require('../config/auth');

router.get('/:id', discoverCtrl.show)

//Access to all furniture....
router.get('/', discoverCtrl.index);





module.exports = router;
