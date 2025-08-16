"use strict";

var _require = require('sequelize'),
  Sequelize = _require.Sequelize,
  DataTypes = _require.DataTypes;
var sequelizeConfig = require('../config/sequelize'); // Supondo que você tenha um arquivo de configuração do sequelize

var sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
  // Or the correct dialect of your database
  dialectOptions: process.env.NODE_ENV === 'production' // Usando process.env.NODE_ENV para verificar o ambiente
  ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  } : {},
  logging: false // Defina como true para ver os logs do Sequelize
});
var db = {
  sequelize: sequelize,
  Sequelize: Sequelize
};
db.user = require("./user")(sequelize, DataTypes); // Passa sequelize e DataTypes
// db.product = require("./product")(sequelize, DataTypes);
// db.category = require("./category")(sequelize, DataTypes);
// db.cart = require("./cart")(sequelize, DataTypes);
// db.order = require("./order")(sequelize, DataTypes);

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
module.exports = db;