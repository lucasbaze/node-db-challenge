const knex = require('knex');
const config = require('../knexfile');
const utils = require('./utils');
const db = knex(config);

module.exports = {
    getProjects,
    addProject,
};

//
//Get Projects
async function getProjects() {
    let projects = db('projects');
    return projects.map(project => utils.convertCompleted(project, 'complete'));
}

//
//Create New Project
function addProject(project) {
    return db('projects').insert({
        ...project,
    });
}
