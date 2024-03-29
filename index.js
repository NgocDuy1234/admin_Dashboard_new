const path = require('path');
const morgan = require('morgan');
const express = require('express');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to MongoDB
db.connect();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
