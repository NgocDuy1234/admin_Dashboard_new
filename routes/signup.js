const express = require('express');
const router = express.Router();

const SignUpController = require('../app/controllers/SignUpController');

router.post('/store', SignUpController.store);
router.get('/', SignUpController.index);

module.exports = router;
