"use strict";

var express = require('express');
var _require = require('../controllers/authController'),
  register = _require.register,
  login = _require.login,
  getAllUsers = _require.getAllUsers;
var router = express.Router();
router.post('/register', register);
router.get('/getAllUsers', getAllUsers);
router.post('/login', login);
module.exports = router;