
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('creator_mediums').del()
    .then(function () {
      // Inserts seed entries
      return knex('creator_mediums').insert([
        {
          creator_id: 1,
          medium_id: 1
        },
        {
          creator_id: 2,
          medium_id: 1
        },
        {
          creator_id: 2,
          medium_id: 2
        },
        {
          creator_id: 2,
          medium_id: 3
        },
        {
          creator_id: 3,
          medium_id: 7
        },
        {
          creator_id: 3,
          medium_id: 1
        },
        {
          creator_id: 4,
          medium_id: 1
        },
        {
          creator_id: 5,
          medium_id: 6
        },
        {
          creator_id: 6,
          medium_id: 1
        },
        {
          creator_id: 7,
          medium_id: 1
        },
        {
          creator_id: 8,
          medium_id: 1
        },
        {
          creator_id: 9,
          medium_id: 1
        },
        {
          creator_id: 10,
          medium_id: 1
        },
        {
          creator_id: 11,
          medium_id: 1
        },
        {
          creator_id: 12,
          medium_id: 1
        },
        {
          creator_id: 13,
          medium_id: 1
        },
        {
          creator_id: 14,
          medium_id: 4
        },
        {
          creator_id: 15,
          medium_id: 1
        },
        {
          creator_id: 16,
          medium_id: 1
        },
        {
          creator_id: 17,
          medium_id: 1
        },
        {
          creator_id: 18,
          medium_id: 1
        },
        {
          creator_id: 19,
          medium_id: 1
        },
        {
          creator_id: 19,
          medium_id: 2
        },
        {
          creator_id: 20,
          medium_id: 1
        },
        {
          creator_id: 21,
          medium_id: 1
        },
        {
          creator_id: 21,
          medium_id: 2
        },
        {
          creator_id: 22,
          medium_id: 6
        },
        {
          creator_id: 23,
          medium_id: 6
        },
        {
          creator_id: 24,
          medium_id: 1
        },
        {
          creator_id: 24,
          medium_id: 3
        },
        {
          creator_id: 25,
          medium_id: 1
        },
        {
          creator_id: 26,
          medium_id: 1
        },
        {
          creator_id: 27,
          medium_id: 1
        },
        {
          creator_id: 27,
          medium_id: 2
        },
        {
          creator_id: 27,
          medium_id: 4
        },
        {
          creator_id: 28,
          medium_id: 1
        },
        {
          creator_id: 28,
          medium_id: 3
        },
        {
          creator_id: 29,
          medium_id: 8
        },
        {
          creator_id: 30,
          medium_id: 8
        },
        {
          creator_id: 31,
          medium_id: 6
        },
      ]);
    });
};
