const { Sequelize } = require('sequelize');

const isRailwayInternal = !!process.env.PGHOST && process.env.PGHOST.endsWith('.railway.internal');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: isRailwayInternal
    ? {} // conexão interna do Railway não precisa SSL
    : { ssl: { require: true, rejectUnauthorized: false } }, // fora do Railway
});

async function connect() {
  await sequelize.authenticate();
  console.log('🔗 Sequelize conectado ao Postgres.');
}

module.exports = { sequelize, connect };
