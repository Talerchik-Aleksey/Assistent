import express from "express"
import { getAnswersByID } from "../controllers/answers"

const router = express.Router()

router.post("/:id", getAnswersByID)

export const answers = router
