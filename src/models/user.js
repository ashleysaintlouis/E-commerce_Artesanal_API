const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../database'); // agora é a instância correta e desestruturada

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
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
}
, {
  tableName: 'users',
  timestamps: true
});

return User;
};
