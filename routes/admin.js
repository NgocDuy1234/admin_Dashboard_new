const express = require('express');
const router = express.Router();

const AdminController = require('../app/controllers/AdminController');

router.use('/', AdminController.index);

module.exports = router;
