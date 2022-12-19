import { Request, Response } from "express"
import { log } from "../lib/logger"
import { getAnswers } from "../services/answers-services"

export async function getAnswersByID(req: Request, res: Response) {
  try {
    const id = req.params.id
    const answers = await getAnswers(id)
    res.status(200).send(answers)
  } catch (error) {
    log.error(error)
    res.status(500)
  }
}
