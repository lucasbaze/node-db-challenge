const knex = require('knex');
const config = require('../knexfile');
const utils = require('./utils');
const db = knex(config);

module.exports = {
    getTasks,
    addTask,
};

//
//Get Projects
async function getTasks() {
    let tasks = await db
        .select(
            'p.project_name as Project',
            't.description as Task Description',
            't.notes as Task Notes',
            't.complete as Task Complete'
        )
        .from('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id');

    return tasks.map(task => utils.convertCompleted(task, 'Task Complete'));
}

//
//Create New Project
function addTask(task) {
    return db('tasks').insert({
        ...task,
    });
}
