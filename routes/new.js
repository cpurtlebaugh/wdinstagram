var express = require('express');
var router = express.Router();
var entriesController = require('../controllers/entries');

/* GET '/' - render entries index view */
router.get('/entries/new', entriesController.renderNewPhoto);

module.exports = router;
