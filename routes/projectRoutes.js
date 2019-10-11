const router = require('express').Router();
const Projects = require('../models/project-model');

router.get('/', async (req, res) => {
    let projects = await Projects.getProjects();
    res.status(200).json(projects);
});

router.get('/:id', async (req, res, next) => {
    let { id } = req.params;
    try {
        let project = await Projects.getProject(id);
        res.status(200).json(project);
    } catch (err) {
        next(err);
    }
});

router.post('/', validateProject, async (req, res, next) => {
    let project = req.body;
    try {
        let newProject = await Projects.addProject(project);
        res.status(200).json(newProject);
    } catch (err) {
        next(err);
    }
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
