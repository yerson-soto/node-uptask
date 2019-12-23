require ('dotenv').config();
const express = require('express');
const path = require('path');

// initialize app
const app = express();

// APP PORT
app.set('port', process.env.APP_PORT || 4000);

// APP LANGUAGE
app.set('language', process.env.APP_LANGUAGE || 'en');

// APP TEMPLATE ENGINE
app.set('view engine', process.env.APP_VIEW_ENGINE);

// APP VIEWS DIR
app.set('views', path.join(__dirname, '../app/views/pages'));

// APP STATIC FILES DIR
app.set('static', express.static(process.env.APP_STATIC_DIR));

// export app settings
module.exports = app;