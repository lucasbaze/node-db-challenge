const knex = require('knex');
const config = require('../knexfile');

const db = knex(config);

module.exports = {
    getProjects,
    addProject,
};

//
//Get Projects
function getProjects() {
    return db('projects');
}

//
//Create New Project
function addProject(project) {
    return db('projects').insert({
        ...project,
    });
}
