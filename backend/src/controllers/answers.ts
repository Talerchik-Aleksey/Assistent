import { Request, Response } from "express"
import { log } from "../lib/logger"

export async function getAnswersByID(req: Request, res: Response) {
  try {
    const allQuestions = await getAllQuestions()
    res.status(200).send(allQuestions)
  } catch (error) {
    log.error(error)
    res.status(500)
  }
}
