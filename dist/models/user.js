"use strict";

var _require = require('sequelize'),
  DataTypes = _require.DataTypes,
  Sequelize = _require.Sequelize;
var _require2 = require('../database'),
  sequelize = _require2.sequelize; // agora é a instância correta e desestruturada

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'usuario',
    timestamps: true
  });
  return User;
};