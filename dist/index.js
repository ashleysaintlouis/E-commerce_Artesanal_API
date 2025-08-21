"use strict";

require('dotenv').config();
var app = require('./app');
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  return console.log("\uD83D\uDE80 Server on port ".concat(PORT));
});