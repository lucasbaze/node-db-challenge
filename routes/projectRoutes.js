const router = require('express').Router();
const Projects = require('../models/project-model');

router.post('/', validateProject, async (req, res) => {
    let project = req.body;
    let newProject = await Projects.addProject(project);
    res.status(200).json(newProject);
});

//
//Middleware
function validateProject(req, res, next) {
    let project = req.body;
    if (!project || !project.name) {
        next('Missing parameters');
    }
    next();
}

module.exports = router;
