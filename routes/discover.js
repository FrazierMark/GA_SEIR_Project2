const express = require('express');
const router = express.Router();
const discoverCtrl = require('../controllers/discover');

router.get('/:id', discoverCtrl.show)
router.get('/', discoverCtrl.index);

module.exports = router;
