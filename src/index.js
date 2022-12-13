const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = 3000;

// fix lỗi submit ra trang trống hoặc object rỗng
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());

app.use(methodOverride('_method'))

// Static file
app.use(express.static(path.join(__dirname, 'public')));
// Http log
app.use(morgan('combined'));
// Template engine
app.engine(
    'hbs',
    engine({ extname: '.hbs', helpers: { sum: (a, b) => a + b } }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// Connect DB
db.connect();
// Route initial
route(app);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
