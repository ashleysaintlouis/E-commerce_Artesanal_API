"use strict";

var functions = require('firebase-functions');
var app = require('../src/app'); // seu express app

exports.api = functions.runWith({
  memory: '512MB'
}).https.onRequest(app);