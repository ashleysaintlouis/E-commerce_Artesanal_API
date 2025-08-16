"use strict";

var jwt = require('jsonwebtoken');
require('dotenv').config();
function authMiddleware(req, res, next) {
  var _req$headers$authoriz;
  var token = (_req$headers$authoriz = req.headers['authorization']) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(' ')[1];
  if (!token) return res.status(401).json({
    error: 'Token não fornecido'
  });
  try {
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({
      error: 'Token inválido'
    });
  }
}
module.exports = authMiddleware;