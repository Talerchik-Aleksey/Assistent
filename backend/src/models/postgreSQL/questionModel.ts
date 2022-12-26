import * as Sequelize from "sequelize"
import { db } from "./databaseSeq"
import { answers } from "./answersModule"
interface QuestionAttributes {
  id: string;
  question_text: string;
}

type QuestionCreationAttributes = Sequelize.Optional<QuestionAttributes, "id">

interface QuestionInstance
  extends Sequelize.Model<QuestionAttributes, QuestionCreationAttributes>,
    QuestionAttributes {}

export const question = db.define(
  "question",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    question_text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

answers.belongsTo(question, { foreignKey: "question_id" })
question.hasMany(answers, { foreignKey: "question_id" })

export const userTyeps = typeof question
