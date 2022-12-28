const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middlewares/sortMiddleware');

const route = require('./routes');
const db = require('./config/db');
const sortMiddleware = require('./app/middlewares/sortMiddleware');

const app = express();
const port = 3000;

// fix lỗi submit ra trang trống hoặc object rỗng
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());

app.use(methodOverride('_method'));

// apply custom Middleware
app.use(sortMiddleware);

// Static file
app.use(express.static(path.join(__dirname, 'public')));
// Http log
app.use(morgan('combined'));
// Template engine
app.engine(
    'hbs',
    engine({ extname: '.hbs', 
    helpers: { 
        sum: (a, b) => a + b,
        sortable: (field, sort) => {
            const sortType = field === sort.column ? sort.type : 'default';

            const icons = {
                default: 'oi oi-elevator',
                desc:'oi oi-sort-descending',
                asc: 'oi oi-sort-ascending',
            }
            const types = {
                default: 'desc',
                desc: 'asc',
                asc: 'desc',
            }
            const icon = icons[sortType];
            const type = types[sortType];
            return `<a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>`
        }
    }
}),
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
