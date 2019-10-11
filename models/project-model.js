const knex = require('knex');
const config = require('../knexfile');
const utils = require('./utils');
const db = knex(config);

module.exports = {
    getProjects,
    getProject,
    addProject,
};

//
//Get Projects
async function getProjects() {
    let projects = db('projects');
    return projects.map(project => utils.convertCompleted(project, 'complete'));
}

//
//Get Specific Project
async function getProject(project_id) {
    let project = await db('projects')
        .where({ project_id })
        .first();
    let tasks = await db
        .select('id', 'description', 'notes', 'complete')
        .from('tasks')
        .where({ project_id });

    project = utils.convertCompleted(project, 'complete');
    tasks = tasks.map(task => utils.convertCompleted(task, 'complete'));

    return {
        ...project,
        tasks: [...tasks],
    };
}

//
//Create New Project
function addProject(project) {
    return db('projects').insert({
        ...project,
    });
}
