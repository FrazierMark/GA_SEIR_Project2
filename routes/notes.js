const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');
const isLoggedIn = require('../config/auth');

router.get('/:id', isLoggedIn, notesCtrl.show);
router.post('/:id', isLoggedIn, notesCtrl.addNote);
router.put('/:id', isLoggedIn, notesCtrl.editNote);
router.delete('/:id', isLoggedIn, notesCtrl.deleteNote);

module.exports = router;
