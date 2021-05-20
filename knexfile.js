module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
    connection: {
      filename: './data/spookycreators2019.db3',
    },
  },
  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
    connection: {
      filename: './data/test.db3',
    },
  },
  production: {

  },
};
