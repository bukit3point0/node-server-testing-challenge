
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('creator_panels').del()
    .then(function () {
      // Inserts seed entries
      return knex('creator_panels').insert([
        {
          creator_id: 5,
          panel_id: 1
        },
        {
          creator_id: 6,
          panel_id: 1
        },
        {
          creator_id: 8,
          panel_id: 1
        },
        {
          creator_id: 9,
          panel_id: 1
        },
        {
          creator_id: 18,
          panel_id: 1
        },
        {
          creator_id: 3,
          panel_id: 2
        },
        {
          creator_id: 12,
          panel_id: 2
        },
        {
          creator_id: 14,
          panel_id: 2
        },
        {
          creator_id: 21,
          panel_id: 2
        },
        {
          creator_id: 27,
          panel_id: 2
        },
        {
          creator_id: 28,
          panel_id: 2
        },
        {
          creator_id: 1,
          panel_id: 3
        },
        {
          creator_id: 6,
          panel_id: 3
        },
        {
          creator_id: 10,
          panel_id: 3
        },
        {
          creator_id: 22,
          panel_id: 3
        },
        {
          creator_id: 26,
          panel_id: 3
        },
        {
          creator_id: 13,
          panel_id: 4
        },
        {
          creator_id: 14,
          panel_id: 4
        },
        {
          creator_id: 15,
          panel_id: 4
        },
        {
          creator_id: 17,
          panel_id: 4
        },
        {
          creator_id: 29,
          panel_id: 4
        },
        {
          creator_id: 31,
          panel_id: 4
        },
        {
          creator_id: 3,
          panel_id: 6
        },
        {
          creator_id: 7,
          panel_id: 6
        },
        {
          creator_id: 14,
          panel_id: 6
        },
        {
          creator_id: 24,
          panel_id: 6
        },
        {
          creator_id: 25,
          panel_id: 6
        },
        {
          creator_id: 28,
          panel_id: 6
        },
        {
          creator_id: 2,
          panel_id: 7
        },
        {
          creator_id: 11,
          panel_id: 7
        },
        {
          creator_id: 21,
          panel_id: 7
        },
        {
          creator_id: 26,
          panel_id: 7
        },
        {
          creator_id: 27,
          panel_id: 7
        },
        {
          creator_id: 13,
          panel_id: 8
        },
        {
          creator_id: 6,
          panel_id: 9
        },
        {
          creator_id: 7,
          panel_id: 9
        },
        {
          creator_id: 11,
          panel_id: 9
        },
        {
          creator_id: 12,
          panel_id: 9
        },
        {
          creator_id: 17,
          panel_id: 9
        },
        {
          creator_id: 28,
          panel_id: 9
        },
        {
          creator_id: 4,
          panel_id: 10
        },
        {
          creator_id: 9,
          panel_id: 10
        },
        {
          creator_id: 18,
          panel_id: 10
        },
        {
          creator_id: 29,
          panel_id: 10
        },
        {
          creator_id: 30,
          panel_id: 10
        },
        {
          creator_id: 3,
          panel_id: 12
        },
        {
          creator_id: 10,
          panel_id: 12
        },
        {
          creator_id: 11,
          panel_id: 12
        },
        {
          creator_id: 12,
          panel_id: 12
        },
        {
          creator_id: 16,
          panel_id: 12
        },
        {
          creator_id:18,
          panel_id: 12
        },
        {
          creator_id: 29,
          panel_id: 12
        },
        {
          creator_id: 1,
          panel_id: 13
        },
        {
          creator_id: 17,
          panel_id: 13
        },
        {
          creator_id: 20,
          panel_id: 13
        },
        {
          creator_id: 26,
          panel_id: 13
        },
        {
          creator_id: 27,
          panel_id: 13
        },
        {
          creator_id: 5,
          panel_id: 14
        },
        {
          creator_id: 22,
          panel_id: 14
        },
        {
          creator_id: 23,
          panel_id: 14
        },
        {
          creator_id: 31,
          panel_id: 14
        },
        {
          creator_id: 1,
          panel_id: 15
        },
        {
          creator_id: 4,
          panel_id: 15
        },
        {
          creator_id: 14,
          panel_id: 15
        },
        {
          creator_id: 20,
          panel_id: 15
        },
        {
          creator_id: 4,
          panel_id: 16
        },
        {
          creator_id: 5,
          panel_id: 16
        },
        {
          creator_id: 15,
          panel_id: 16
        },
        {
          creator_id: 23,
          panel_id: 16
        },
        {
          creator_id: 8,
          panel_id: 17
        },
        {
          creator_id: 13,
          panel_id: 17
        },
        {
          creator_id: 16,
          panel_id: 17
        },
        {
          creator_id: 22,
          panel_id: 17
        },
        {
          creator_id: 23,
          panel_id: 17
        },
        {
          creator_id: 25,
          panel_id: 17
        },
        {
          creator_id: 2,
          panel_id: 18
        },
        {
          creator_id: 17,
          panel_id: 18
        },
        {
          creator_id: 21,
          panel_id: 18
        },
        {
          creator_id: 22,
          panel_id: 18
        },
        {
          creator_id: 25,
          panel_id: 18
        },
        {
          creator_id: 2,
          panel_id: 19
        },
        {
          creator_id: 7,
          panel_id: 19
        },
        {
          creator_id: 8,
          panel_id: 19
        },
        {
          creator_id: 13,
          panel_id: 19
        },
        {
          creator_id: 19,
          panel_id: 19
        },
        {
          creator_id: 26,
          panel_id: 19
        },
        {
          creator_id: 10,
          panel_id: 20
        },
        {
          creator_id: 14,
          panel_id: 20
        },
        {
          creator_id: 16,
          panel_id: 20
        },
        {
          creator_id: 19,
          panel_id: 20
        },
        {
          creator_id: 26,
          panel_id: 20
        },
        {
          creator_id: 31,
          panel_id: 20
        }
      ]);
    });
};
