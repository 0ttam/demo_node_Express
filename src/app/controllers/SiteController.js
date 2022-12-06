const Course = require("../models/Course");
class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => res.render("home"))
      .catch((err) => next(err));
  }
  // [GET] /Search
  search(req, res) {
    res.send("search");
  }
}

module.exports = new SiteController();
