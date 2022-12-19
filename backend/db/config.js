const config = require("config")

module.exports = {
  username: config.get("postgreSQL.user"),
  password: config.get("postgreSQL.password"),
  database: config.get("postgreSQL.database"),
  host: "127.0.0.1",
  dialect: "postgres",
}
