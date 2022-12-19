import * as Sequelize from "sequelize"
import { db } from "./databaseSeq"

interface UserAttributes {
  id: string;
  login: string;
  password: string;
  full_name: string;
  country: string;
  phone: string;
  image: string;
  updated_at: Date;
  created_at: Date;
}

type BookCreationAttributes = Sequelize.Optional<
  UserAttributes,
  "id" | "created_at" | "updated_at"
>

interface UserInstance
  extends Sequelize.Model<UserAttributes, BookCreationAttributes>,
    UserAttributes {}

export const user = db.define<UserInstance>(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    full_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

export const userTyeps = typeof user
