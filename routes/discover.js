const express = require('express');
const router = express.Router();
const discoverCtrl = require('../controllers/discover');
const cors = require('cors');

router.get('/:id', discoverCtrl.show);
router.get('/', discoverCtrl.index);

module.exports = router;
