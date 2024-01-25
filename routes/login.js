const express = require('express');
const router = express.Router();

const LoginController = require('../app/controllers/LoginController');

// LoginController.index
router.get('/get_user', LoginController.login);
router.get('/', LoginController.index);

module.exports = router;
