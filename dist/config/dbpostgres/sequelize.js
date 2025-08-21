"use strict";

var _require = require('sequelize'),
  Sequelize = _require.Sequelize;

// const isProd = process.env.NODE_ENV === 'production';

var sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
  logging: false
});
module.exports = sequelize;