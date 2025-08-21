"use strict";

var express = require('express');
var _require = require('../controllers/authController'),
  register = _require.register,
  login = _require.login,
  getAllUsers = _require.getAllUsers;
var router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.get('/', function (req, res) {
  res.send('API funcionando!');
});
router.get('/getAllUsers', getAllUsers);
module.exports = router;