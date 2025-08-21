const { sequelize } = require('../config/dbpostgres/sequelize');
const db = require('./models');

(async () => {
  await db.sequelize.authenticate();
  console.log('Conexão bem-sucedida!');

  const users = await db.User.findAll();
  console.log(users);
})();