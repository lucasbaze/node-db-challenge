const router = require('express').Router();
const Tasks = require('../models/task-model');

router.get('/', async (req, res) => {
    let tasks = await Tasks.getTasks();
    res.status(200).json(tasks);
});

router.post('/', validateTask, async (req, res, next) => {
    let task = req.body;
    try {
        let newTask = await Tasks.addTask(task);
        res.status(200).json(newTask);
    } catch (err) {
        next(err);
    }
});

//
//Middleware
function validateTask(req, res, next) {
    let task = req.body;
    if (!task || !task.description || !task.project_id) {
        next('Missing parameters');
    }
    next();
}

module.exports = router;
