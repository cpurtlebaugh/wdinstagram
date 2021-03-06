var express = require('express');
var router = express.Router();
var entriesController = require('../controllers/entries');

/* GET '/' - render entries index view */
router.get('/entries', entriesController.renderEntriesIndex);

module.exports = router;
