const express = require('express');
const router = express.Router();
const Controller = require('../app/controllers/authController');

// Trang chủ
router.get('/', Controller.homePage);

module.exports = router;