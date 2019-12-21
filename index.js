const express = require('express');
const route = require('./routes');

// inicializar app
const app = express();

app.use('/', route());

app.listen(3000);