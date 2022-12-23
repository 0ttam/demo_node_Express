const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()]).then(
            ([courses, deleteCount]) => {
                res.render('./me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                    deleteCount: deleteCount,
                });
            },
        );
    }
    // [GET] /me/stored/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('./me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
