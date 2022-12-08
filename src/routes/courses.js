const express = require('express');
router = express.Router();
const courseController = require('../app/controllers/CourseController');

// [GET] /courses/:slug
router.get('/:slug', courseController.show);
module.exports = router;
