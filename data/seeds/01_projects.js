exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('projects').insert([
                {
                    project_name: 'Complete Sprint',
                    description:
                        'Finish the Sprint Challenge before 1:00 p.m. CST',
                },
                { project_name: 'Get Lunch' },
            ]);
        });
};
