const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController'); // import controller untuk authorization
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;

