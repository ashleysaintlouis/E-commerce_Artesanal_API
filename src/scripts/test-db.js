const { pool } = require('../config/dbpostgres/db');

(async () => {
  try {
    const r = await pool.query('SELECT NOW() as now;');
    console.log('DB OK:', r.rows[0]);
    process.exit(0);
  } catch (e) {
    console.error('DB FAIL:', e);
    process.exit(1);
  }
})();
