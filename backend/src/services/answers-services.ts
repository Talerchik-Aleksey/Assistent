import { answers } from "../models/postgreSQL/answersModule"

export async function getAnswers(id: string) {
  return await answers.findOne({
    where: { id: id },
    raw: true,
  })
}
