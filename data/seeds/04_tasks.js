exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('tasks').insert([
                {
                    description: 'Buy a coffee',
                    note: "like from Lupa's",
                    project_id: 1,
                },
                {
                    description: 'Find a cozy corner',
                    note: 'with a fireplace',
                    project_id: 1,
                },
                {
                    description: 'Open up laptop',
                    note: 'with full juice',
                    project_id: 1,
                },
                { description: 'Get to work', note: 'now', project_id: 1 },
                {
                    description: 'Buy a sandwich',
                    note: 'at a fancy place',
                    project_id: 2,
                },
                { description: 'Eat it', note: 'now', project_id: 2 },
            ]);
        });
};
