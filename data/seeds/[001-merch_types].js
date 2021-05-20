
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('merch_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('merch_types').insert([
        {merch_type_name: "book"},
        {merch_type_name: "art print"},
        {merch_type_name: "CD"},
        {merch_type_name: "DVD"},
        {merch_type_name: "comic book"},
        {merch_type_name: "clothing"},
        {merch_type_name: "misc"}
      ]);
    });
};
