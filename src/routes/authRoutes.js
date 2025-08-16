const express = require('express');
const { register, login, getAllUsers } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.get('/getAllUsers', getAllUsers);
router.post('/login', login);

module.exports = router;
