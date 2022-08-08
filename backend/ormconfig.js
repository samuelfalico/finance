module.exports = {
  "type": process.env.ORM_TYPE,
  "host": process.env.ORM_HOST,
  "port": process.env.ORM_PORT,
  "username": process.env.ORM_USERNAME,
  "password": process.env.ORM_PASSWORD,
  "database": process.env.ORM_DATABASE,
  "entities": [
    "./src/modules/*/entities/*.ts"
  ],
  "migrations": [
    "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}