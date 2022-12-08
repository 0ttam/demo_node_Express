const express = require('express');
router = express.Router();
const newsController = require('../app/controllers/NewsController.js');

// newsController.index
router.get('/', newsController.index);
module.exports = router;
