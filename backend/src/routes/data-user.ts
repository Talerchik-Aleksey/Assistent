import express from "express"
import { loginController, createNewUser, getInfo } from "../controllers/users"
import { auth } from "../lib/auth"

const router = express.Router()

router.post("/login", loginController)

router.post("/signup", createNewUser)

router.post("/user-info", auth, getInfo)

export default router
