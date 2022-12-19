import { question } from "../models/postgreSQL/questionModel"

export async function getAllQuestions() {
  return await question.findAll()
}
