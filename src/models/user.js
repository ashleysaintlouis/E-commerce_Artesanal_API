const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Assumindo seu arquivo de configuração do Sequelize

const User = sequelize.define('User', {
  // O campo 'id' é criado automaticamente por padrão como chave primária e auto-incremento

  name: {
    type: DataTypes.STRING,
    allowNull: false // O nome não pode ser nulo
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // O email deve ser único
    validate: {
      isEmail: true // Valida se o formato é de email
    }
  },
  password: { // É uma boa prática usar 'password' em inglês
    type: DataTypes.STRING,
    allowNull: false
    // Geralmente você não armazena a senha diretamente, mas sim um hash dela.
    // As operações de hash seriam feitas antes de salvar o modelo.
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Define o valor padrão para a data/hora atual
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  // Opções adicionais do modelo
  tableName: 'user', // Define explicitamente o nome da tabela (opcional, o padrão é o nome do modelo no plural)
  timestamps: true // Sequelize gerencia automaticamente os campos createdAt e updatedAt
});

// Você pode adicionar métodos de instância ou de classe ao modelo
// Exemplo: método para comparar senhas (após hashing)
// User.prototype.comparePassword = function(candidatePassword) {
//   // Use uma biblioteca de hashing como bcrypt para comparar
//   return bcrypt.compare(candidatePassword, this.password);
// };


module.exports = User;
