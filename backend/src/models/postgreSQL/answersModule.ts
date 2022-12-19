import * as Sequelize from "sequelize"
import { db } from "./databaseSeq"

interface AnswerAttributes {
  id: string;
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
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    answers: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

export const userTyeps = typeof answers
