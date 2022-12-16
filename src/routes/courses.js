const express = require('express');
router = express.Router();
const courseController = require('../app/controllers/CourseController');
// [GET] /courses/create
router.get('/create', courseController.create);
// [GET] /courses/:id/edit
router.get('/:id/edit', courseController.edit);
// [POST] /courses/store
router.post('/store', courseController.store);
// [PUT] /courses/:id
router.put('/:id', courseController.update);
// [DELETE] /courses/:id
router.delete('/:id', courseController.destroy);
// [DELETE] /courses/:id
router.delete('/:id/force', courseController.forceDestroy);
// [PATCH] /courses/:id/restore
router.patch('/:id/restore', courseController.restore);
// [GET] /courses/:slug
router.get('/:slug', courseController.show);
module.exports = router;
