"use strict";

require('dotenv').config();
var app = require('./app');
// const { connect, sequelize } = require('./config/sequelize');

var PORT = process.env.PORT || 3000;

// (async () => {
// try {
// await connect();
// opcional: sincronizar (somente no início)
// await sequelize.sync({ alter: true });
app.listen(PORT, function () {
  return console.log("\uD83D\uDE80 Server on port ".concat(PORT));
});
// } catch (e) {
//     console.error('Erro ao iniciar servidor:', e);
//     process.exit(1);
//   }
// })();