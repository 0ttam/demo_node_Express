const express = require("express");
router = express.Router();
const siteController = require("../app/controllers/SiteController.js");

// siteController.index
router.use("/search", siteController.search);
router.use("/", siteController.index);
module.exports = router;
