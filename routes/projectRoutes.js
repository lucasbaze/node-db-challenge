const router = require('express').Router();
const Projects = require('../models/project-model');

router.get('/', async (req, res) => {
    let projects = await Projects.getProjects();
    res.status(200).json(projects);
});

router.post('/', validateProject, async (req, res) => {
    let project = req.body;
    let newProject = await Projects.addProject(project);
    res.status(200).json(newProject);
});

//
//Middleware
function validateProject(req, res, next) {
    let project = req.body;
    if (!project || !project.project_name) {
        next('Missing parameters');
    }
    next();
}

module.exports = router;
