import express from "express"
import { getQuestion } from "../controllers/questions"

const router = express.Router()

router.post("/", getQuestion)

export const questions = router
