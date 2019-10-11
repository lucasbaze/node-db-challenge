exports.up = function(knex) {
    return knex.schema
        .createTable('projects', t => {
            t.increments('project_id');
            t.string('project_name', 128).notNullable();
            t.boolean('complete').defaultTo(false);
        })
        .createTable('resources', t => {
            t.increments('resource_id');
            t.string('resource_name', 128)
                .unique()
                .notNullable();
            t.string('description');
        })
        .createTable('project_resources', t => {
            t.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            t.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
        })
        .createTable('tasks', t => {
            t.increments();
            t.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
            t.string('description').notNullable();
            t.string('notes');
            t.boolean('complete').defaultsTo(false);
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
