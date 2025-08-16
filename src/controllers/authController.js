const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { createUser, findUserByEmail, findUserById, getAllUsers: getAllUsersService } = require('../services/userService');
require('dotenv').config();

async function register(req, res) {
    const { name, email, password } = req.body;
    try {
        const userExists = await findUserByEmail(email);
        if (userExists) return res.status(400).json({ error: 'Usuário já existe' });

        const user = await createUser(name, email, password);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Erro no servidor' });
    }
}

async function getUser(req, res) {
    try {
        const user = await findUserById(req.user.id);
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Erro no servidor' });
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await getAllUsersService();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Erro no servidor' });
    }
}


async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await findUserByEmail(email);
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ error: 'Senha inválida' });

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Erro no servidor' });
    }
}

module.exports = { register, login, getUser, getAllUsers };
