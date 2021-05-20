
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('creators').del()
    .then(function () {
      // Inserts seed entries
      return knex('creators').insert([
        {
          creator_name: "Amanda Fasciano" //1
        },
        {
          creator_name: "Arylias Nova" //2
        },
        {
          creator_name: "Austin Janowsky" //3
        },
        {
          creator_name: "Brandy Stark" //4
        },
        {
          creator_name: "Christopher Balzano" //5
        },
        {
          creator_name: "Dave Goudsward" //6
        },
        {
          creator_name: "Dirk Manning" //7
        },
        {
          creator_name: "Doug Ford" //8
        },
        {
          creator_name: "Eric O'Dierno" //9
        },
        {
          creator_name: "Jaymes Thompson" //10
        },
        {
          creator_name: "Jeff Carroll" //11
        },
        {
          creator_name: "Johnny C", //12
          creator_stage_name: "Johnny C"
        },
        {
          creator_name: "Jonathan Mayberry" //13
        },
        {
          creator_name: "Justin Groom" //14
        },
        {
          creator_name: "Kathy Nappier" //15
        },
        {
          creator_name: "Ken Barr" //16
        },
        {
          creator_name: "Kenzie Jennings" //17
        },
        {
          creator_name: "Kerry O'Neal" //18
        },
        {
          creator_name: "Keyz Williams" //19
        },
        {
          creator_name: "Mark Muncy" //20
        },
        {
          creator_name: "Connie Reynolds", //21
          creator_stage_name: "Marni Joelen"
        },
        {
          creator_name: "Mary Beyer" //22
        },
        {
          creator_name: "Mary Kay McBrayer" //23
        },
        {
          creator_name: "Matt Knowles", //24
          creator_company_name: "InSymmetry"
        },
        {
          creator_name: "Monique Desir" //25
        },
        {
          creator_name: "Richard Lee Byers" //26
        },
        {
          creator_name: "Rob X Roman", //27
          creator_stage_name: "Doc Monster"
        },
        {
          creator_name: "Steph Cannon", //28
          creator_company_name: "InSymmetry"
        },
        {
          creator_name: "Tim Anderson" //29
        },
        {
          creator_name: "Zachary Beckler" //30
        },
        {
          creator_name: "Zena Dixon" //31
        }
      ]);
    });
};
