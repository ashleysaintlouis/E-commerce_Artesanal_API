require('dotenv').config();
const app = require('./app');
const { connect, sequelize } = require('./config/sequelize');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connect();
    // opcional: sincronizar (somente no início)
    // await sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
  } catch (e) {
    console.error('Erro ao iniciar servidor:', e);
    process.exit(1);
  }
})();
