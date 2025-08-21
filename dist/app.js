"use strict";

var express = require('express');
var cors = require('cors');
require('dotenv').config();
var _require = require('./database'),
  initDatabase = _require.initDatabase;
initDatabase();
var authRoutes = require('./routes/authRoutes');
var statusRoutes = require('./routes/statusRoutes');
var app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/api', statusRoutes);
module.exports = app;