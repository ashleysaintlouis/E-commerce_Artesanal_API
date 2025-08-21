// models/user.js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  // Relacionamentos
  User.associate = function(models) {
    User.hasMany(models.Post);
  };

  return User;
};
