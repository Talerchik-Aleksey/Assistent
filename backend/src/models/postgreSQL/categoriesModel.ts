import * as Sequelize from "sequelize"
import { db } from "./databaseSeq"

export const Category = db.define(
  "categories",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      unique: true,
      allowNull: false,
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
)
