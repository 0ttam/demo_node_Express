const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./side');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
