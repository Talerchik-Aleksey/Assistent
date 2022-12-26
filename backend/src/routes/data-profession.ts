import express from "express"
import { GetProfessionsByCategory } from "../controllers/professions"

const router = express.Router()

router.post("/:categories", GetProfessionsByCategory)

export const professions = router
