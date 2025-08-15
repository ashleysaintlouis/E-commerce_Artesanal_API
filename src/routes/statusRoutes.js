const express = require('express');
    const router = express.Router();
    const pool = require('../config/dbpostgres/db'); // Importa o pool de conexão

    router.get('/status/db', async (req, res) => {
      try {
        // Tenta executar uma consulta simples para verificar a conexão
        await pool.query('SELECT 1');
        res.status(200).json({ status: 'Database connection successful' });
      } catch (error) {
        console.error('Database connection check failed:', error);
        res.status(500).json({ status: 'Database connection failed', error: error.message });
      }
    });

    module.exports = router;
