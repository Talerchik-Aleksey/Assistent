import express from "express"
import { Request, Response } from "express"
import { log } from "../lib/logger"
import { getProfessionsByCategoryName } from "../services/profession-services"

interface RequestParams {
  categories: string;
}

export async function GetProfessionsByCategory(
  req: express.Request<RequestParams>,
  res: Response
) {
  try {
    const categories = req.params.categories
    const answers = await getProfessionsByCategoryName(categories)
    res.status(200).send(answers)
  } catch (error) {
    log.error(error)
    res.status(500)
  }
}
