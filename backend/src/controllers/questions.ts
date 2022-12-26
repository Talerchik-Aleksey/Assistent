import { Request, Response } from "express"
import { log } from "../lib/logger"
import { getAllQuestions } from "../services/question-services"
import { question } from "../models/postgreSQL/questionModel"
import { answers } from "../models/postgreSQL/answersModule"
import { user } from "../models/postgreSQL/userModel"

export async function getQuestion(req: Request, res: Response) {
  try {
    //const allQuestions = await getAllQuestions()
    log.info("Enter")
    const questions = await question.findAll({
      include: [
        {
          model: answers,
        },
      ],
    })

    log.info(questions)
    res.status(200).send(questions)
  } catch (error) {
    log.error(error)
    res.status(500)
  }
}
