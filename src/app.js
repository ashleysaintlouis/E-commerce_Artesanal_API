const express = require('express');
const cors = require('cors');
require('dotenv').config();
import { initDatabase } from './database';
initDatabase();

const authRoutes = require('./routes/authRoutes');
const statusRoutes = require('./routes/statusRoutes'); // Importa a nova rota


const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', statusRoutes);

app.get('/', (req, res) => {
    res.send('API funcionando!');
});


module.exports = app;
