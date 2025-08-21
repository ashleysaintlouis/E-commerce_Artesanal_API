"use strict";

var express = require('express');
var cors = require('cors');
require('dotenv').config();
var authRoutes = require('./routes/authRoutes');
var statusRoutes = require('./routes/statusRoutes');
var app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/api', statusRoutes);
module.exports = app;