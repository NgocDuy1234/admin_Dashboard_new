const User = require('../../../../Web/src/app/controller/models/User');
const { mongooseToObject } = require('../../ulti/mongoose');

const bcrypt = require('bcrypt');

class LoginController {
    // [GET] /
    index(req, res, next) {
        res.render('login');
    }

    // [GET] /login
    login(req, res, next) {
        const query_search = req.query;

        User.find({ email: query_search.email })
            .then((data) => {
                const saltRounds = 10;
                const myPlaintextPassword = query_search.password;
                bcrypt.compare(
                    myPlaintextPassword,
                    data[0].password,
                    function (err, result) {
                        if (
                            result &&
                            query_search.username === data[0].username
                        ) {
                            res.redirect('/');
                        } else {
                            res.json({
                                message: 'Wrong password or username!',
                            });
                        }
                    },
                );
            })
            .catch((err) => {
                res.json({
                    message: 'Login again!',
                });
            });
    }
}

module.exports = new LoginController();
