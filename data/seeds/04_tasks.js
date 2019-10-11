exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('tasks').insert([
                {
                    description: 'Buy a coffee',
                    notes: "like from Lupa's",
                    project_id: 1,
                },
                {
                    description: 'Find a cozy corner',
                    notes: 'with a fireplace',
                    project_id: 1,
                },
                {
                    description: 'Open up laptop',
                    notes: 'with full juice',
                    project_id: 1,
                },
                { description: 'Get to work', notes: 'now', project_id: 1 },
                {
                    description: 'Buy a sandwich',
                    notes: 'at a fancy place',
                    project_id: 2,
                },
                { description: 'Eat it', notes: 'now', project_id: 2 },
            ]);
        });
};
