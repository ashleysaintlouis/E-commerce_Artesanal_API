"use strict";

var fs = require('fs');
var path = require('path');
var _require = require('sequelize'),
  DataTypes = _require.DataTypes;
var sequelize = require('../config/dbpostgres/sequelize'); // importa seu sequelize.js

var basename = path.basename(__filename);
var db = {};

// Carrega todos os models automaticamente
fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = require(path.join(__dirname, file))(sequelize, DataTypes);
  db[model.name] = model;
});

// Configura associações se existirem
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Exporta instância + models
db.sequelize = sequelize;
module.exports = db;