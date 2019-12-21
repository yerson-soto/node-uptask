const express = require('express');
const route = express.Router();

module.exports = () => {

    route.get('/', (req, resp) => {
        resp.send('Home Page');
    });

    route.get('/projects', (req, res) => {
        res.send('Projects Page');
    });
    
    return route;
}