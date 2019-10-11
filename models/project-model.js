const knex = require('knex');
const config = require('../knexfile');

const db = knex(config);

module.exports = {
    addProject,
};

//
//Create New Project
function addProject(project) {
    return db('projects').insert({
        ...project,
    });
}
