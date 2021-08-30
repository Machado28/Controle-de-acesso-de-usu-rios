module.exports = {

      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "1machadinho",
      database: "e-commerce",
      entities: ["src/app/models/*.ts"],
      migrations: ["src/database/migrations/*.ts"],
      cli: {
            migrationsDir: "src/database/migrations",
      },
};
