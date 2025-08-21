const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { initDatabase } = require('./database');
initDatabase(); 

const authRoutes = require('./routes/authRoutes');
const statusRoutes = require('./routes/statusRoutes');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/auth', authRoutes);
app.use('/api', statusRoutes);




module.exports = app;
