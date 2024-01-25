const User = require('../../../../Web/src/app/controller/models/User');
const { mongooseToObject } = require('../../ulti/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        res.render('index');
    }
}

module.exports = new SiteController();
