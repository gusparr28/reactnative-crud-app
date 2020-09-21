// modules importations
const express = require('express');
const app = express();

// middlewares
app.use(express.json());

// routes
app.use(require('./routes/employee'));

// settings
app.set('port', process.env.PORT || 5000);

module.exports = app;