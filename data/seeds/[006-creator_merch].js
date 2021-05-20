
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('creator_merch').del()
    .then(function () {
      // Inserts seed entries
      return knex('creator_merch').insert([
        {
          creator_merch_name: "Paranormal Psychologist",
          copies: 20,
          creator_id: 9,
          merch_type_id: 1
        },
        {
          creator_merch_name: "Einstein and Paranormal",
          copies: 30,
          creator_id: 9,
          merch_type_id: 1
        }
      ]);
    });
};
