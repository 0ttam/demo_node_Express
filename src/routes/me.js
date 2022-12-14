const express = require('express');
router = express.Router();
const meController = require('../app/controllers/MeController');
// [GET] /me/stored/courses
router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);

module.exports = router;
