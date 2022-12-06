const Course = require("../models/Course");
class SiteController {
  // [GET] news
  index(req, res) {
    Course.find({}, function (err, courses) {
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: "connect failure" });
      }
    });
  }
  // [GET] news/:slug
  search(req, res) {
    res.send("search");
  }
}

module.exports = new SiteController();
