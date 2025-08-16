const bcrypt = require('bcrypt');
const pool = require('../config/dbpostgres/db');

async function createUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
        [name, email, hashedPassword]
    );
    return result.rows[0];
}



async function getAllUsersService() {
    const result = await pool.query('SELECT id, name, email FROM user');
    return result.rows;
}


async function findUserByEmail(email) {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
}

module.exports = { createUser, findUserByEmail, getAllUsersService };
