const User = require('../models/User');
const { mongooseToObject } = require('../../ulti/mongoose');

const bcrypt = require('bcrypt');

class SignUpController {
    // [GET] /signup
    index(req, res, next) {
        res.render('signup');
    }

    // [POST] /signup/store
    store(req, res, next) {
        let { username, email, password } = new User(req.body);

        try {
            const saltRounds = 10;
            const myPlaintextPassword = password;
            bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
                const newUser = {
                    username,
                    email,
                    password: hash,
                };

                const savetoDB = new User(newUser);
                savetoDB.save();
                res.redirect('/');
            });
        } catch (err) {
            console.log(err);
            res.redirect('back');
        }
    }
}

module.exports = new SignUpController();
