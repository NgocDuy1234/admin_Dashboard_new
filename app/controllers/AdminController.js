const Product = require('../../../../Web/src/app/controller/models/Product');
const { mutipleMongooseToObject } = require('../../ulti/mongoose');

class AdminController {
    // [GET] /test
    index(req, res, next) {
        res.json({
            test: 'Request to login, then redirect to an show page, \
            Make a search to find the customer name, CRUD operation',
        });
    }
}

module.exports = new AdminController();
