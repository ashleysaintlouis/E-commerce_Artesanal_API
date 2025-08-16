"use strict";

var express = require('express');
var cors = require('cors');
require('dotenv').config();
var authRoutes = require('./routes/authRoutes');
var statusRoutes = require('./routes/statusRoutes'); // Importa a nova rota

var app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/api', statusRoutes);
app.get('/', function (req, res) {
  res.send('API funcionando!');
});
module.exports = app;