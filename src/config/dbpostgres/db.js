const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Conectado ao banco de dados PostgreSQL');
});

pool.on('error', (err, client) => {
    console.error('Erro inesperado no pool de conexão do banco de dados:', err);
    process.exit(-1); // Opcional: sair do processo em caso de erro grave
});

module.exports = pool;
