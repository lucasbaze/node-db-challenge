const knex = require('knex');
const config = require('../knexfile');

const db = knex(config);

module.exports = {
    getTasks,
    addTask,
};

//
//Get Projects
function getTasks() {
    return db
        .select(
            'p.project_name as Project',
            't.description as Task Description',
            't.notes as Task Notes',
            't.complete as Task Complete'
        )
        .from('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id');
}

//
//Create New Project
function addTask(task) {
    return db('tasks').insert({
        ...task,
    });
}
