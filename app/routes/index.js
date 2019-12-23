const { Router } = require('express');
const router = Router();

// route names
const { home, projects } = require('./routes');

// controllers 
const ProjectController = require('../controllers/ProjectsController');
const HomeController = require('../controllers/HomeController');

module.exports = () => {
    // homepage routes
    router.route(home.index)
        .get(HomeController.index);

    // projects routes
    router.route(projects.index)
        .get(ProjectController.index)
        .post(ProjectController.store);

    return router;
}