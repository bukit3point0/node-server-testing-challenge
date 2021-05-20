
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('panels').del()
    .then(function () {
      // Inserts seed entries
      return knex('panels').insert([
        {
          panel_name: "Horrorific Beasts",
          panel_description: "",
          time: "5P",
          date: "November 1"
        },
        {
          panel_name: "Horror in Four Colors: Horror Comics",
          panel_description: "",
          time: "6P",
          date: "November 1"
        },
        {
          panel_name: "Where Wolf? There, Wolf!: Horror In Comedy",
          panel_description: "",
          time: "7P",
          date: "November 1"
        },
        {
          panel_name: "What We're Gonna Do To THAT Guy...",
          panel_description: "",
          time: "8P",
          date: "November 1"
        },
        {
          panel_name: "Sick and Twisted",
          panel_description: "",
          time: "9P",
          date: "November 1"
        },
        {
          panel_name: "Pen Through Paper: Writing & Publishing 101",
          panel_description: "",
          time: "11A",
          date: "November 2"
        },
        {
          panel_name: "Writing for All Mediums",
          panel_description: "",
          time: "12P",
          date: "November 2"
        },
        {
          panel_name: "Spotlight Guest: Jonathan Mayberry",
          panel_description: "",
          time: "1P",
          date: "November 2"
        },
        {
          panel_name: "SOURCE",
          panel_description: "",
          time: "2P",
          date: "November 2"
        },
        {
          panel_name: "GhostTILT",
          panel_description: "",
          time: "3P",
          date: "November 2"
        },
        {
          panel_name: "NaNoWriMo MEETUP!",
          panel_description: "",
          time: "4P",
          date: "November 2"
        },
        {
          panel_name: "Screen Screams",
          panel_description: "",
          time: "5P",
          date: "November 2"
        },
        {
          panel_name: "Choose Your Own Adventure",
          panel_description: "",
          time: "6P",
          date: "November 2"
        },
        {
          panel_name: "The Pod People of Horror Podcasting",
          panel_description: "",
          time: "7P",
          date: "November 2"
        },
        {
          panel_name: "Paranormal Oddities: True Tales of the Weird",
          panel_description: "",
          time: "8P",
          date: "November 2"
        },
        {
          panel_name: "Fear and Belief",
          panel_description: "",
          time: "11A",
          date: "November 3"
        },
        {
          panel_name: "Cult of Terror",
          panel_description: "",
          time: "12P",
          date: "November 3"
        },
        {
          panel_name: "Women in Horror",
          panel_description: "",
          time: "1P",
          date: "November 3"
        },
        {
          panel_name: "Anatomy of Suspense",
          panel_description: "",
          time: "2P",
          date: "November 3"
        },
        {
          panel_name: "Sympathy for the Devil",
          panel_description: "",
          time: "3P",
          date: "November 3"
        }
      ]);
    });
};
