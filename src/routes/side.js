const express = require('express');
router = express.Router();
const siteController = require('../app/controllers/SiteController.js');

// siteController.index
router.get('/search', siteController.search);
router.get('/', siteController.index);
module.exports = router;
