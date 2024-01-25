const express = require('express');
const router = express.Router();

const TestController = require('../app/controllers/TestController');

router.use('/', TestController.index);

module.exports = router;
