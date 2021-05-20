
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mediums').del()
    .then(function () {
      // Inserts seed entries
      return knex('mediums').insert([
        {medium_name: "writer"},
        {medium_name: "editor"},
        {medium_name: "publisher"},
        {medium_name: "artist"},
        {medium_name: "musician"},
        {medium_name: "podcaster"},
        {medium_name: "actor"}, 
        {medium_name: "film"}
      ]);
    });
};
