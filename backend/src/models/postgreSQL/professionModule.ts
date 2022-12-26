import * as Sequelize from "sequelize"
import { Category } from "./categoriesModel"
import { db } from "./databaseSeq"

export const Profession = db.define(
  "profession",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categories_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: "CASCADE",
      references: {
        model: "categories",
        key: "id",
      },
    },
    profession_name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    learningIn: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
  },
  {
    timestamps: false,
  }
)

Profession.belongsTo(Category, { foreignKey: "categories_id" })
Category.hasMany(Profession, { foreignKey: "categories_id" })
