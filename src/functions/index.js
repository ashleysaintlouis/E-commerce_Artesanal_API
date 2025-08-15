const functions = require('firebase-functions');
const app = require('../src/app'); // seu express app

exports.api = functions.runWith({ memory: '512MB' }).https.onRequest(app);
