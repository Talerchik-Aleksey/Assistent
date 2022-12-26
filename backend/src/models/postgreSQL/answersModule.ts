import * as Sequelize from "sequelize"
import { db } from "./databaseSeq"

interface AnswerAttributes {
  id: string;
  question_id: number;
  answers: Array<String>;
}

type AnswerCreationAttributes = Sequelize.Optional<AnswerAttributes, "id">

interface AnswerInstance
  extends Sequelize.Model<AnswerAttributes, AnswerCreationAttributes>,
    AnswerAttributes {}

export const answers = db.define<AnswerInstance>(
  "answers",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    question_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: "CASCADE",
      references: {
        model: "questions",
        key: "id",
      },
    },
    answers: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
)

export const userTyeps = typeof answers
