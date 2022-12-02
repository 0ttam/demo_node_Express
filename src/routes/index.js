const newsRouter = require("./news");
const siteRouter = require("./side");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
