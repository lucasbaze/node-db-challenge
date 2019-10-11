exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('resources').insert([
                { resource_name: 'Laptop', description: 'Not a Chromebook' },
                { resource_name: 'Coffee', description: 'Like a Latte' },
                {
                    resource_name: 'Writing Utensil',
                    description: 'Preferably a pencil',
                },
            ]);
        });
};
