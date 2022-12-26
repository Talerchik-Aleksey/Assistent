import express from "express"
import config from "config"
import user from "./routes/data-user"
import { log } from "./lib/logger"
import { questions } from "./routes/data-questions"
import { answers } from "./routes/data-answer"
import { professions } from "./routes/data-profession"

const app = express()

app.use(express.json()) // parse data from req.body>
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs")

app.use("/users", user)
app.use("/questions", questions)
app.use("/answers", answers)
app.use("/professions", professions)

const port: number = config.get("server.port")
// const network: string = config.get("server.network")

app.listen(port, () => {
  log.info(`App listening on port ${port}`)
})
