import { Sequelize } from "sequelize"
import config from "config"

const user: string = config.get("postgreSQL.user"),
  host: string = config.get("postgreSQL.host"),
  database: string = config.get("postgreSQL.database"),
  password: string = config.get("postgreSQL.password"),
  port: number = config.get("postgreSQL.port")

export const db = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
})
