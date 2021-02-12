//dump command: docker exec -i postgres psql -h 127.0.0.1 -U postgres -d strapi -W < strapi.sql

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', process.env.DATABASE_HOST || '172.20.2.40'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', process.env.DATABASE_PASSWORD || '1234'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
