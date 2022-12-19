import * as Sequelize from "sequelize"
import { db } from "./databaseSeq"

interface QuestionAttributes {
  id: string;
  question_text: string;
  answer_id: number;
}

type QuestionCreationAttributes = Sequelize.Optional<
  QuestionAttributes,
  "id" | "answer_id"
>

interface QuestionInstance
  extends Sequelize.Model<QuestionAttributes, QuestionCreationAttributes>,
    QuestionAttributes {}

export const question = db.define<QuestionInstance>(
  "questions",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    question_text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    answer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

export const userTyeps = typeof question
