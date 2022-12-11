const express = require('express');
router = express.Router();
const courseController = require('../app/controllers/CourseController');
// [GET] /courses/create
router.get('/create', courseController.create);
// [POST] /courses/store
router.post('/store', courseController.store);
// [GET] /courses/:slug
router.get('/:slug', courseController.show);
module.exports = router;
