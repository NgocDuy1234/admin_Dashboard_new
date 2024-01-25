const loginRouter = require('./login');
const signupRouter = require('./signup');
const siteRouter = require('./site');
const testRouter = require('./test');
const adminRouter = require('./admin');

function route(app) {
    app.use('/login', loginRouter);
    app.use('/signup', signupRouter);
    app.use('/test', testRouter);
    app.use('/admin', adminRouter); // Login to get the information of the customer
    app.use('/', siteRouter);
}

module.exports = route;
