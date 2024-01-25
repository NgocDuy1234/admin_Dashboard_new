const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../ulti/mongoose');

class TestController {
    // [GET] /test
    index(req, res, next) {
        Product.find({})
            .then((products) => {
                res.json({
                    products: mutipleMongooseToObject(products),
                });
            })
            .catch(next);
    }
}

module.exports = new TestController();
