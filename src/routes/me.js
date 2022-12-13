const express = require('express');
router = express.Router();
const meController = require('../app/controllers/MeController');
// [GET] /me/stored/courses
router.get('/stored/courses', meController.storedCourses);

module.exports = router;
