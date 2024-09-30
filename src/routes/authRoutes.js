const express = require('express');
const router = express.Router();
const Controller = require('../app/controllers/authController');

router.get('/facebook',Controller.facebookAuth);
router.get('/facebook/callback', Controller.facebookCallback);

router.get('/google',Controller.googleAuth);
router.get('/google/callback', Controller.googleCallback);

module.exports = router;